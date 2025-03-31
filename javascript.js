document.getElementById("skip-link").addEventListener("click", function (event) {
    event.preventDefault();  // Prevents default link behavior
    let target = document.getElementById("main");
    
    // Make sure the main content can be focused
    target.setAttribute("tabindex", "-1");
    target.focus();
    
    // Smooth scroll to the main content
    target.scrollIntoView({ behavior: "smooth", block: "start" });
});
console.log('JavaScript is enabled');

// <!-- Content taken & modified from UMGPT with the prompt, "javascript for html page."
// UMGPT. (2025). UMGPT (March version) [Large language model]. -->