// detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfDrumButtons ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

}
         //detecting keypress
        document.addEventListener("keypress", function(event){
            makesound(event.key);
            buttonAnimation(event.key);
        });

        function makesound (key){
            switch(key){
                case "w": 
                var tom1 = new Audio("sound/tom-1.mp3");
                tom1.play();
                break;
                case "a": 
                var tom2 = new Audio("sound/tom-2.mp3");
                tom2.play();
                break;
                case "s": 
                var tom3 = new Audio("sound/tom-3.mp3");
                tom3.play();
                break;
                case "d": 
                var tom4 = new Audio("sound/tom-4.mp3");
                tom4.play();
                break;
                case "j": 
                var tom5 = new Audio("sound/snare.mp3");
                tom5.play();
                break;
                case "k": 
                var tom6 = new Audio("sound/crash.mp3");
                tom6.play();
                break;
                case "l": 
                var tom7 = new Audio("sound/kick-bass.mp3");
                tom7.play();
                break;
                default: 
                document.write(buttonInnerHTML);
            }

        }

        function buttonAnimation(currentKey){
            var activeButton = document.querySelector("." + currentKey);
            activeButton.classList.add("pressed");
            setTimeout(function(){
                activeButton.classList.remove("pressed");
            }, 100)

        }


 
