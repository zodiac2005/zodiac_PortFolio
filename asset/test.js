var title = document.getElementById("t");
title.innerHTML = "zodiac";

var slideImages = ["imgs/dashbored.png", "imgs/indeximg.png","imgs/Screenshot 2026-05-15 043452.png", "imgs/Screenshot 2026-05-15 051915.png"];
var currentSlide = 0;
var systemManagerImage = document.getElementById("system-manager-image");

function rotateSystemManagerImage() {
    if (!systemManagerImage) return;
    currentSlide = (currentSlide + 1) % slideImages.length;
    systemManagerImage.src = slideImages[currentSlide];
}

setInterval(rotateSystemManagerImage, 4000);