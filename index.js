

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

document.querySelectorAll("button")[i].addEventListener("click", function () { 
    
    var buttonInnerHTML = this.innerHTML;

    sound(buttonInnerHTML);
    animation(buttonInnerHTML);
    
    });

}

document.addEventListener("keydown" , function(event){
    sound(event.key);
    animation(event.key);

})

// document.addEventListener("keyup" , function(up){
//     animationTwo(up.key);
// })

function sound(keypopo){

    switch (keypopo) {
        case "w":
             var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
        break;

        case "a":
             var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
        break;

        case "s":
             var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
        break;

        case "d":
             var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
        break;

        case "j":
             var audio = new Audio('./sounds/crash.mp3');
            audio.play();
        break;

        case "k":
             var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
        break;

        case "l":
             var audio = new Audio('./sounds/snare.mp3');
            audio.play();
        break;
    
        default: console.log(key);
    }
}

function animation(currentKey){
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

} 

// function animationTwo(popopo){
//     var nonActiveButton = document.querySelector("." + popopo);

//     nonActiveButton.classList.toggle("pressed");
// }





