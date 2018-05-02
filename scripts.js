var coinImages = ["coin1.png", "coin2.png", "coin3.png", "coin4.png", "coin5.png",
    "coin6.png", "coin7.png", "coin8.png", "coin9.png", "coin10.png", "coin11.png", "coin12.png",
    "coin1.png", "coin2.png", "coin3.png", "coin4.png", "coin5.png",
    "coin6.png", "coin7.png", "coin8.png", "coin9.png", "coin10.png", "coin11.png", "coin12.png",
    "coin1.png", "coin2.png", "coin3.png", "coin4.png", "coin5.png",
    "coin6.png", "coin7.png", "coin8.png", "coin9.png", "coin10.png", "coin11.png", "coin12.png",
    "coin1.png"];

var coinImages1 = ["coin1.png", "coin2.png", "coin3.png", "coin4.png", "coin5.png",
    "coin6.png", "coin7.png", "coin8.png", "coin9.png", "coin10.png", "coin11.png", "coin12.png",
    "coin1.png", "coin2.png", "coin3.png", "coin4.png", "coin5.png",
    "coin6.png", "coin7.png", "coin8.png", "coin9.png", "coin10.png", "coin11.png", "coin12.png",
    "coin1.png", "coin2.png", "coin3.png", "coin4.png", "coin5.png",
    "coin6.png", "coin7.png", "coin8.png", "coin9.png", "coin10.png", "coin11.png", "coin12.png",
    "coin1.png", "coin2.png", "coin3.png", "coin4.png", "coin5.png", "coin6.png", "coin7.png"];


var speed = 50;
var i = 0;

function coinSpin1() {
    if (i < coinImages.length) {
        document.getElementById("coin-image").src = coinImages[i];
        i++
        setTimeout(coinSpin1, speed);
    } else {
        i = 0;
    }
}

function coinSpin2() {
    if (i < coinImages1.length) {
        document.getElementById("coin-image").src = coinImages1[i];
        i++
        setTimeout(coinSpin2, speed);
    } else {
        i = 0;
    }
}

function coinSpin() {
    var randomMath = Math.round(Math.random());
    if (randomMath > 0) {
        coinSpin1();
    } else {
        coinSpin2();
    }
    getNewColor();
    getNewColor1();
}

function getNewColor() {
    
    var symbols = "0123456789ABCDEF";

    var color = "#";

    for(var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }

    document.getElementById("btn").style.backgroundColor = color;
    document.getElementById("coin-image").style.backgroundColor = color;
}

function getNewColor1() {
    
    var symbols = "0123456789ABCDEF";

    var color = "#";

    for(var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }

    document.body.style.backgroundColor = color;
} 

var snd = new Audio("spinmeround.mp3");

var myAudio = snd;
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
