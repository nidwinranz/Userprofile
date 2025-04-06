document.getElementById("start-button").addEventListener("click", showPersonalDetailsPrompt);


// Hide the start button when clicked
document.getElementById("start-button").addEventListener("click", function() {
    this.style.display = "none"; // Hide the button
});

document.getElementById("start-button").addEventListener("click", function() {
    var container = document.querySelector(".container");
    container.style.display = "none"; // Hide the container
});



// Total number of steps
const totalSteps = 4;

// Current step
let currentStep = 0;


// Hide progress bar initially
document.querySelector('.progress').style.display = 'none';



function showPersonalDetailsPrompt() {
    const fname = prompt("Enter your firstname:");
    const lname = prompt("Enter your lastname:");
    const age = prompt("Enter your age:");
    const gender = prompt("Enter your gender:");
    const agree = prompt("Agree with privacy terms (Yes or No ):");

    // Update displayed information
    document.getElementById("fname").textContent = fname;
    document.getElementById("lname").textContent = lname;
    document.getElementById("age").textContent = age;
    document.getElementById("gender").textContent = gender;
    document.getElementById("agree").textContent = agree;

    // Show personal details section
    document.getElementById("personal-details").style.display = "block";


     // Show progress bar
      document.querySelector('.progress').style.display = 'block';


    // Update progress
    currentStep++;
    updateProgress();

   


    // Show completion percentage pop-up
    const completionPercentage = ((currentStep / totalSteps) * 100).toFixed(2);
    alert(`You have completed ${completionPercentage}% of the process.`);

}



// function validateAndShowExperienceForm() {
//     // You can add validation logic here if needed
//     // For simplicity, assuming all fields are filled
//     document.getElementById("volunteering-experience").style.display = "block";
//     showExperiencePrompt();

//     // Update progress
//     currentStep++;
//     updateProgress();
// }



function showExperiencePrompt() {


    // Hide personal details section
    document.getElementById("personal-details").style.display = "none";

 

    const rational = prompt("What brings you to this cause:");
    const doa = prompt("DoA:");
    const task = prompt("Enter your volunteering task:");
    const place = prompt("Enter your volunteering place :");
    const type = prompt("Enter your volunteering assignment type:");



    // Update displayed information
    document.getElementById("rational").textContent = rational;
    document.getElementById("doa").textContent = doa;
    document.getElementById("task").textContent = task;
    document.getElementById("place").textContent = place;
    document.getElementById("type").textContent = type;
    

    // Show personal details section
    document.getElementById("volunteering-experience").style.display = "block";

// Show progress bar
document.querySelector('.progress').style.display = 'block';


// Update progress
currentStep++;
updateProgress();



// Show completion percentage pop-up
const completionPercentage = ((currentStep / totalSteps) * 100).toFixed(2);
alert(`You have completed ${completionPercentage}% of the process.`);

}


function QualificationsPrompt() {

     // Hide personal details section
    document.getElementById("personal-details").style.display = "none";

   // Hide personal details section
   document.getElementById("volunteering-experience").style.display = "none";

    const study = prompt("Main field of study:");
    const degree = prompt("Enter your highest degree:");
    const uni = prompt("Enter the University/Institution :");
    const year = prompt("Enter the compeletion year :");
    const  country = prompt("Enter the country :");


    // Update displayed information
    document.getElementById("study").textContent = study;
    document.getElementById("degree").textContent = degree;
    document.getElementById("uni").textContent = uni;
    document.getElementById("year").textContent = year;
    document.getElementById("country").textContent = country;


     // Show personal details section
     document.getElementById("Qualifications").style.display = "block";


     // Show progress bar
      document.querySelector('.progress').style.display = 'block';

    // Update progress
    currentStep++;
    updateProgress();


   
    
// Show completion percentage pop-up
const completionPercentage = ((currentStep / totalSteps) * 100).toFixed(2);
alert(`You have completed ${completionPercentage}% of the process.`);

    
}




function availabilityPrompt() {

         // show personal details section
         document.getElementById("personal-details").style.display = "block";

         // show  personal details section
         document.getElementById("volunteering-experience").style.display = "block";

             

    const hours = prompt("Min hours per week:");
    const surname = prompt("Enter your Surname:");
    const tel = prompt("Enter your Tel-phone number :");
    const mail = prompt("Enter your e-mail :");



    // Update displayed information
    document.getElementById("hours").textContent = hours;
    document.getElementById("surname").textContent = surname;
    document.getElementById("tel").textContent = tel;
    document.getElementById("mail").textContent = mail



     // Show personal details section
     document.getElementById("Availability").style.display = "block";


     // Show progress bar
      document.querySelector('.progress').style.display = 'block';

    // Update progress
    currentStep++;
    updateProgress();


    
// Show completion percentage pop-up
const completionPercentage = ((currentStep / totalSteps) * 100).toFixed(2);
alert(`You have completed ${completionPercentage}% of the process.`);



    
}



function submitForm() {
    alert("Submitted successfully");
  }
  




function updateProgress() {
    const progress = (currentStep / totalSteps) * 100; // Calculate progress percentage
    document.getElementById("progress-bar").style.width = `${progress}%`; // Update progress bar width
    document.getElementById("progress-text").textContent = `${progress}% Complete`; // Update progress text

    if (progress >= 100) {
        // If progress is 100% or more, stop further progress
        document.getElementById("volunteering-next-button").removeEventListener("click", validateAndShowExperienceForm);
    }
}



// Add event listeners to the buttons
document.getElementById("qulButton").addEventListener("click", hideButtonOnceClicked);
document.getElementById("volButton").addEventListener("click", hideButtonOnceClicked);
document.getElementById("perButton").addEventListener("click", hideButtonOnceClicked);

// Function to hide the button once it's clicked
function hideButtonOnceClicked(event) {
    const button = event.target; // Get the button element that was clicked
    button.style.display = 'none'; // Hide the button
}
