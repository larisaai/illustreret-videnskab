"use strict";
let burgermenu = document.querySelector(".container");
let navbar = document.querySelector(".navigation");

burgermenu.addEventListener("click", openNav)

function openNav() {
    burgermenu.classList.toggle("change");
    navbar.classList.toggle("show");
}

// read more button
function readMore() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.querySelector(".readMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more &#x25BC;";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less &#x25B2;";
        moreText.style.display = "inline";
    }
}

function readMore2() {
    let dots2 = document.getElementById("dots2");
    let moreText2 = document.getElementById("more2");
    let btnText2 = document.querySelector("#readMore2");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more &#x25BC;";
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Read less &#x25B2;";
        moreText2.style.display = "inline";
    }
}


var slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}

function changeColor() {
    let offer1 = document.querySelector("#offer1");
    let offer2 = document.querySelector("#offer2");
    let offer3 = document.querySelector("#offer3");
    let addBTN = document.querySelector(".tilføj");

    if (offer1.checked == true) {
        addBTN.style.backgroundColor = "#81d742";
    }
    else if (offer2.checked == true) {
        addBTN.style.backgroundColor = "#81d742";

    } else if (offer3.checked == true) {
        addBTN.style.backgroundColor = "#81d742";

    }
}

function shakeCart() {
    let cart = document.querySelector(".buyButton a img");
    cart.classList.toggle("shake");
    console.log("clicked");
}


let slideIndexB = 1;
showDivs(slideIndexB);

function plusDivs(n) {
    showDivs(slideIndexB += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("boxAT");
    if (n > x.length) {
        slideIndexB = 1
    }
    if (n < 1) {
        slideIndexB = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndexB - 1].style.display = "block";
}

let slideIndexC = 1;
showDivs2(slideIndexC);

function plusDivs2(n) {
    showDivs2(slideIndexC += n);
}

function showDivs2(n) {
    let i;
    let x = document.getElementsByClassName("Review");
    if (n > x.length) {
        slideIndexC = 1
    }
    if (n < 1) {
        slideIndexC = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndexC - 1].style.display = "block";
}

let modal = document.getElementById('myModal');
let btnModal = document.getElementById("modalButton");
let span = document.getElementsByClassName("close")[0];

btnModal.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let slideIndexPreview = 1;
showPreview(slideIndexPreview);

function plusPreview(n) {
    showPreview(slideIndexPreview += n);
}

function showPreview(n) {
    let i;
    let x = document.getElementsByClassName("preview");
    if (n > x.length) {
        slideIndexPreview = 1
    }
    if (n < 1) {
        slideIndexPreview = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndexPreview - 1].style.display = "block";
}