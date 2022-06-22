
var elements = document.querySelectorAll(".drum");

document.addEventListener("keydown", function(event) {
    playAudioFile(event.key);
    animateButton(event.key);
})

for (var i=0; i < elements.length; i++) {
    element = elements[i];
    element.addEventListener("click", handleClick);
    
}

function handleClick() {
    console.log(this)
    var key = this.innerHTML;
    playAudioFile(key);
    animateButton(key);
}


function playAudioFile (key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            break;
        
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            break;
        
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            break;
        
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            break;
        
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            break;
        
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            break;
        
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            break;
    
        default:
            break;
    }
    audio.play();
}

function animateButton(key) {
    var activeKey = document.querySelector("." + key);
    activeKey.classList.toggle("pressed")
    setTimeout(function() {
        activeKey.classList.toggle("pressed")
    }, 100);
}