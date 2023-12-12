// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from(".nav", {
        y: "-10",
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    })
        .to(".boundingelm", {
            y: 0,
            duration: 2,
            delay: -1,
            ease: Expo.easeInOut,
            stagger: .2
        })
        .from(".herobtm", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })
}




function cursorsize() {

    //defult scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dtls) {
        // clearTimeout(timeout);

        var xdiff = dtls.clientX - xprev;
        var ydiff = dtls.clientY - yprev;

        xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(.8, 1.2, ydiff);

        xprev = dtls.clientX;
        yprev = dtls.clientY;
        cursorpointr(xscale, yscale);

       timeout = setTimeout(function () {
            document.querySelector('#cursor').style.transform = `translate(${dtls.clientX}px,${dtls.clientY}px)  scale(1,1)`
        }, 100);

    });
}

function cursorpointr(xscale, yscale) {
    window.addEventListener("mousemove", function (dtls) {
        document.querySelector('#cursor').style.transform = `translate(${dtls.clientX}px,${dtls.clientY}px)  scale(${xscale},${yscale})`
    })
}
cursorpointr();
firstPageAnim();
cursorsize();




document.querySelectorAll(".elem").forEach(function (elem) {
    // var rotate = 0;
    // var rotate = 0;


    // elem.addEventListener("mouseremove", function (dets) {
    //     gsap.to(elem.querySelector("img"), {
    //         opacity: 0,
    //         ease: Power1,
    //     })
    // })
    elem.addEventListener("mousemove", function (dets) {
       var diff =   dets.clientY-elem.getBoundingClientRect().top
        // var diff = dets.clientY - elem.getBoundingClientRect().top;
        // diffrot = dets.clientX - rotate;
        // rotate = dets.clientX;


        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            // rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8)


        })
    })
})