let img = ["plain.png", "cap.png", "green-shirt.png", "red.png", "skincare.png", "winter.png"] ;
let uiterlijk = 0;
let hamster = document.querySelector("#hamster");
hamster.src = "images/" + img[uiterlijk] 

function veranderUiterlijk () {
if (uiterlijk <=4)
    {uiterlijk += 1;
}
else {uiterlijk = 0};
hamster.src = "images/" + img[uiterlijk] 
}

hamster.addEventListener ("click", veranderUiterlijk);