var character = document.getElementById("character");
var block = document.getElementById("block");
var test = document.getElementById("retry");
var startGame = 0;

function jump(){

    if (startGame == 0){
        block.style.animation = "block 1s infinite linear";
        startGame = 1;
    }

    if (character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var gameOver = setInterval(function(){

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
        block.style.animation = "none";
        alert("GAME OVER");
        test.style.zIndex = "10";
    }

}, 10);

function retry(){
    startGame = 0;
    test.style.zIndex = "-5";
}

