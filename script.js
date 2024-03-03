gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    smoothMobile:true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





function loaderAnimation() {


    var para = document.querySelector(".page1textcontainer h3");
    var paratexcontent = para.textContent;
    var splittedpara = paratexcontent.split("");
    var c1 = "";
    splittedpara.forEach(function (elem) {

        c1 += `<span>${elem}</span>`;

    })
    para.innerHTML = c1;

    var h1 = document.querySelector(".heightcontainer h1");
    var h1textcontent = h1.textContent;
    var splittedh1 = h1textcontent.split("");
    var c = "";
    splittedh1.forEach(function (e) {
        c += `<span>${e}</span>`;

    })
    h1.innerHTML = c;

    gsap.from(".heightcontainer h1 span", {
        y: 200,
        duration: .5,
        stagger: .1,
        ease: "expo.Inout",

    })
    document.addEventListener("mousemove", function (dets1) {
        gsap.to(".cursor", {
            y: dets1.y,
            x: dets1.x,
        })
    })

    var h1text = document.querySelector(".heightcontainer");
    h1text.addEventListener("mousemove", function () {
        gsap.to(".cursor", {
            scale: 17,
        })
        gsap.to(".cursor h6", {
            display: "block",
            fontSize: "-3vw"
        })
        gsap.to(".heightcontainer h1 span", {
            fontSize: "5vw",
            stagger: .1,
            duration: 1,
        })
    })
    h1text.addEventListener("mouseleave", function () {
        gsap.to(".cursor", {
            scale: 1,
        })
        gsap.to("h6", {
            // scale:1
            display: "none",
        })
        gsap.to(".heightcontainer h1 span", {
            fontSize: "17vw",
            stagger: .1,
            duration: 1,
        })
    })


    var btn = document.querySelector(".loader button");
    btn.addEventListener("click", function () {
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        var tl = gsap.timeline();
        tl.to(".heightcontainer h1 span", {
            y: -250,
            duration: .5,
            stagger: .1,
            ease: "expo.Inout"
        })
            .to(".loader", {
                y: -900,
                duration: .7,
                ease: "expo.Inout",
            })

            .from(".videocontainer .video", {
                y: 400,
                duration: .7,
                stagger: .1,
                ease: "expo"
            })
            .to(".page1textcontainer h3 span", {
                color: "blue",
                duration: .1,
                stagger: .1,
                ease: "expo.Inout",

            })
    })

}
loaderAnimation();



function sheryEffect() {
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}
sheryEffect();

function page1Animation() {
    var videocontainer = document.querySelector(".page1 .videocontainer");
    videocontainer.addEventListener("mousemove", function (dets1) {
        gsap.to(".videocontainer #video1", {
            // x:dets1.x,
            // y:dets1.y,
            height: "50%",
            duration: 1,

        })
        gsap.to(".videocontainer #video2", {
            height: "60%",
            duration: 1,

        })

        gsap.to(".videocontainer #video3", {
            height: "60%",
            duration: 1,

        })


        gsap.to(".videocontainer #video4", {
            height: "60%",
            duration: 1,

        })


        gsap.to(".videocontainer #video5", {
            height: "65%",
            duration: 1,

        })


        gsap.to(".videocontainer #video6", {
            height: "50%",
            duration: 1,

        })

        gsap.to(".videocontainer #video7", {
            height: "40%",
            duration: 1,

        })
    })
    videocontainer.addEventListener("mouseleave", function () {
        gsap.to(".videocontainer #video1", {
            height: "30%",
            duration: 1,

        })

        gsap.to(".videocontainer #video2", {
            height: "50%",
            duration: 1,

        })
        gsap.to(".videocontainer #video3", {
            height: "45%",
            duration: 1,

        })

        gsap.to(".videocontainer #video4", {
            height: "70%",
            duration: 1,

        })
        gsap.to(".videocontainer #video5", {
            height: "70%",
            duration: 1,

        })

        gsap.to(".videocontainer #video6", {
            height: "30%",
            duration: 1,

        })


        gsap.to(".videocontainer #video7", {
            height: "30%",
            duration: 1,

        })
    })
}

page1Animation();



function page2Animation() {
    gsap.to(".elem2 #h1", {
        y: 230,
        duration: 1,
        delay: .5,
        ease: "expo.Inout",
        scrollTrigger: {
            trigger: ".page2",
            scroller: ".main",

        }
    })
}
page2Animation();


function page3Animation() {


   
    // Define a function to update animations
function updateAnimations() {
    var tl3 = gsap.timeline();
    tl3.to(".page3part2", {
        opacity: 1,
        duration: 1,
    }, "elem32")
    .to(".page3part1", {
        opacity: 0,
        duration: 1,
    }, "elem32")

    .to(".page3part3", {
        opacity: 1,
        duration: 1,
        delay: 3,
    }, "elem33")
    .to(".page3part2", {
        opacity: 0,
        duration: 1,
        delay: 3,
    }, "elem33")
    .to(".page3part1", {
        opacity: 0,
        duration: 1,
        delay: 3,
    }, "elem33")

    .to(".page3part1", {
        delay: 4,
        opacity: 1,
        duration: 1,
    }, "elem31")
    .to(".page3part3", {
        opacity: 0,
        duration: 1,
        delay: 4,
    }, "elem31")
    .to(".page3part2", {
        opacity: 0,
        duration: 1,
        delay: 4,
    }, "elem31");
}

// Call the updateAnimations function initially
updateAnimations();

// Use setInterval to repeatedly call the updateAnimations function
setInterval(updateAnimations, 15000);

    gsap.to(".imgright .img1", {
        bottom: 20,
        duration: 1,
        scrollTrigger: {
            trigger: ".page3",
            scroller: ".main",
        }


    })

    gsap.to(".imgright .img2", {
        top: 30,
        duration: 1,
        scrollTrigger: {
            trigger: ".page3",
            scroller: ".main",
        }


    })

    gsap.to(".imgright .img3", {
        bottom: 20,
        duration: 1,
        scrollTrigger: {
            trigger: ".page3",
            scroller: ".main",
        }


    })
}

page3Animation();



function page4Animation() {
    var h14 = document.querySelector(".leftcontainer h1");
    var h14text = h14.textContent;
    var splittedh14 = h14text.split("");
    var c41 = "";
    splittedh14.forEach(function (e4) {
        c41 += `<span>${e4}</span>`;

    })
    h14.innerHTML = c41;


    var h24 = document.querySelector(".rightcontainer h1");
    var h24text = h24.textContent;
    var splittedh24 = h24text.split("");
    var c42 = "";
    splittedh24.forEach(function (e4) {
        c42 += `<span>${e4}</span>`;

    })
    h24.innerHTML = c42;
    var leftcontainer = document.querySelector(".page4container .leftcontainer");
    leftcontainer.addEventListener("mouseenter", function () {
        gsap.from(".leftcontainer h1 span", {
            y: 100,
            duration: .2,
            stagger: .1,
            ease: "expo.Inout"
        })
        gsap.to(".leftcontainer img", {
            scale: 1.2,
            duration: .5,
        })
        gsap.to(".leftcontainer video", {
            opacity: 1,
        })

        gsap.from(".rightcontainer h1 span", {
            y: 100,
            duration: .2,
            stagger: .1,
            ease: "expo.Inout"
        })
        gsap.to(".rightcontainer img", {
            scale: 1,
            duration: .5,
        })
        gsap.to(".rightcontainer video", {
            opacity: 0,
        })
    })

    var rightcontainer = document.querySelector(".page4container .rightcontainer");
    rightcontainer.addEventListener("mouseenter", function () {
        gsap.from(".rightcontainer h1 span", {
            y: 100,
            duration: .2,
            stagger: .1,
            ease: "expo.Inout"
        })
        gsap.to(".rightcontainer img", {
            scale: 1.2,
            duration: .5,
        })
        gsap.to(".rightcontainer video", {
            opacity: 1,
        })


        gsap.from(".leftcontainer h1 span", {
            y: 100,
            duration: .2,
            stagger: .1,
            ease: "expo.Inout"
        })
        gsap.to(".leftcontainer img", {
            scale: 1,
            duration: .5,
        })
        gsap.to(".leftcontainer video", {
            opacity: 0,
        })

    })

}
page4Animation();


function page5Animation(){
    var tl5=gsap.timeline({
        scrollTrigger:{
            trigger:".page5",
            scroller:".main",
            pin:true,
            // markers:true,
            // start:"top -30%",
            scrub:2,
        }
    })
    tl5.to(".page5overlay #overlay1",{
        y:-900,
        duration:7,
    },"elem5")
    tl5.to(".page5overlay #overlay2",{
        y:900,
        duration:7,
    },"elem5")
    tl5.to(".page5overlay #overlay3",{
        y:-900,
        duration:7,
    },"elem5")
    tl5.to(".page5overlay #overlay4",{
        y:900,
        duration:7,
    },"elem5")
}
page5Animation();



function page6Animation(){
    var tl6=gsap.timeline({
        scrollTrigger:{
            trigger:".page6textcontainer",
            scroller:".main",
            // markers:true,

        }
    })

    tl6.to(".elem6 h1",{
        y:-250,
        duration:.8,
    })
}
page6Animation();


function page7Animation(){
    var page7text=document.querySelector(".textcontainer7");
    page7text.addEventListener("mousemove",function(dets){
        gsap.to(".textcontainer7 i",{
            y:dets.y-300,
            x:dets.x-100,
            opacity:1,
            
        })
        gsap.to(".mousefollower",{
            opacity:0,
        })
    })

    page7text.addEventListener("mouseleave",function(dets){
        gsap.to(".textcontainer7 i",{
            y:dets.y-300,
            x:dets.x-100,
            opacity:0,
            
        })
        gsap.to(".mousefollower",{
            opacity:1,
        })
    })
}
page7Animation();


function page8Animation(){
    var h18=document.querySelector(".elem8 h1");
    var h18textcontent=h18.textContent;
    var splittedh18=h18textcontent.split("");
    var c8="";
    splittedh18.forEach(function(elem){
        c8+=`<span>${elem}</span>`;

    })
    h18.innerHTML=c8;


    var tl8=gsap.timeline({
        scrollTrigger:{
            trigger:".page8",
        scroller:".main",
        pin:true,
        scrub:true,
        // start:"top -10%"
        }
    })
    tl8.from(".elem8 h1 span",{
        y:-300,
        duration:.3,
        stagger:.1,
        ease:"expo.Inout",
    })

}
page8Animation();