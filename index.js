function addingEventListener() {
    const buttonElement = document.getElementById("button");
    function handleClick() {
      alert("I was clicked!");
    }
    buttonElement.addEventListener("click", handleClick);
  }
  addingEventListener();
  