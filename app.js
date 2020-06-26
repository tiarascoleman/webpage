//Write Javascript here- plus this is how to comment in JS (JS is a programming language)
//To test and see if the link between JS and HTML is working, create an alert box
//alert("THE LINK WORKS- YOU'RE DOING GREAT!"); //Tested at 8:02 AM EST (Thursday June 25 2020) - it worked after realizing I have to save every individual file

// var stands for variable (creating an array)
var pics = [
    "imgs/2020s_01.png", //index at 0
    "imgs/2020s_02.jpg", //index at 1
    "imgs/2020s_03.png", //index at 2
    "imgs/2020s_04.jpg", //index at 3
    "imgs/2020s_05.jpg" //index at 4
];
//This command will search the HTML document and look for the first instance of button/img
//While also storing this command as another variable (this is similar to linking in HTML/CSS)
var btn= document.querySelector("button");
var img= document.querySelector("img");

//This helps iterate through the array - plus the counter has to start at 1
//because the first image is already the one at index 0- if we start at 0, it will just replay the same image
var counter= 1;
//The event this is listening to is the hovering feature on the button
// Add an eventListener to btn for when a click happens, when it does happen run the code
btn.addEventListener("click", function(){
    //To test if the line of code above works
    //alert ("CLICKED"); // Tested at 8:08 AM EST (Thurs June 25 2020)- worked on first try! Yay!! :)

    if(counter == 5){
        counter = 0;
    };
    //Finding the source of img and changing it
    img.src = pics[counter];
    //Update counter
    counter = counter +1;
});

