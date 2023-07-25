// Sample array containing project information (you can replace this with your actual data)
const projectsData = [{
        name: "Project 1",
        description: "This is the first project.",
        image: "project1.jpg",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://example.com/project1",
        sourceLink: "https://github.com/example/project1",
    },

];

// Get a reference to the projects section in the DOM
const projectsSection = document.getElementById("projects");

// Function to create a single project element
function createProjectElement(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.innerHTML = `
    <h3>${project.name}</h3>
    <img src="${project.image}" alt="${project.name}">
    <p>${project.description}</p>
    <p>Technologies used: ${project.technologies.join(", ")}</p>
    <a href="${project.liveLink}" target="_blank">Live Version</a>
    <a href="${project.sourceLink}" target="_blank">Source Code</a>
    <button class="details-btn" data-project='${JSON.stringify(project)}'>Check Details</button>
  `;
    return projectElement;
}

// Function to populate the projects section with project elements
function renderProjects() {
    projectsData.forEach((project) => {
        const projectElement = createProjectElement(project);
        projectsSection.appendChild(projectElement);
    });
}

// Call the function to populate the projects section on page load
renderProjects();

// Get references to the popup container and close button in the DOM
const popupContainer = document.getElementById("popupContainer");
const closeBtn = document.getElementById("closeBtn");

// Function to open the popup and display project details
function showPopup(project) {
    const popup = document.getElementById("popup");
    popup.innerHTML = `
    <h3>${project.name}</h3>
    <img src="${project.image}" alt="${project.name}">
    <p>${project.description}</p>
    <p>Technologies used: ${project.technologies.join(", ")}</p>
    <a href="${project.liveLink}" target="_blank">Live Version</a>
    <a href="${project.sourceLink}" target="_blank">Source Code</a>
  `;
    popupContainer.style.display = "block";
}

// Function to close the popup
function closePopup() {
    popupContainer.style.display = "none";
}

// Event listener for the "Check Details" button clicks
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("details-btn")) {
        const projectData = JSON.parse(event.target.dataset.project);
        showPopup(projectData);
    }
});

// Event listener for the close button in the popup
closeBtn.addEventListener("click", closePopup);