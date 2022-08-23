window.onload = ()=>{
    window.dom = {
        body: document.body,
        boot: document.getElementById("boot")
    };

    dom.body.dataset.load = "ing";

    init();
}

function init() {
    console.log("Initializing...");

    dom.body.dataset.load = "ed";
    //dom.body.onclick = (event)=>on.touch.tap(event);
    
    console.log("Initialized");
}