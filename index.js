var random_number = Math.floor(Math.random() * 6) + 1;
var image_make = "dice" + random_number + ".png"; 
var random_generate = "images/" + image_make;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", random_generate);

var random_number1 = Math.floor(Math.random() * 6) + 1;
var image_make1 = "dice" + random_number1 + ".png";
var random_generate1 = "images/" + image_make1;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , random_generate1);

if(random_number > random_number1)
    {
        document.querySelector(".hey").innerHTML = "player 1 won";
    }
    else if(random_number1 > random_number)
        {
            document.querySelector(".hey").innerHTML = "player 2 won";
            
        }
        else{
            
            document.querySelector(".hey").innerHTML = "Draw";
        }