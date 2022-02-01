
//First, I have to define where I can storage my images. Reason why I created a var for each photo
const imageArray = ["assets/img/img_statement_1.png", 
                "assets/img/img_statement_2.png", 
                "assets/img/img_statement_3.png",
                "assets/img/img_statement_4.png",
                "assets/img/img_statement_5.png",
                "assets/img/img_statement_6.png"];

const getImage = document.getElementById('image');
const imageIndex = [1];

//Second, I had to create a function to apply some behaviour when we click on button

function myImage(){
   document.getElementById("image").src = imageArray[imageIndex];
}

