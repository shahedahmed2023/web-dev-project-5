let groceryList = [];

// Wait until DOM is loaded
window.addEventListener("DOMContentLoaded", function() {
   document.querySelector("#addBtn").addEventListener("click", addBtnClick);
   document.querySelector("#clearBtn").addEventListener("click", clearBtnClick);

   // Load the grocery list from localStorage
   let tempList = loadList();
   if (tempList) {
       groceryList = tempList;
   }
  
   if (groceryList.length > 0) {
      // Display list
      for (let item of groceryList) {
         showItem(item);
      } 
   }
   else {
      // No list to display
      enableClearButton(false);
   }     
});

// Enable or disable the Clear button
function enableClearButton(enabled) {
   document.querySelector("#clearBtn").disabled = !enabled;
}

// Show item at end of the ordered list
function showItem(item) {
   let list = document.querySelector("ol");
   list.innerHTML += `<li>${item}</li>`;     
}

// Add item to grocery list
function addBtnClick() {
   let itemTextInput = document.querySelector("#item");
   let item = itemTextInput.value.trim();
   if (item.length > 0) {
      enableClearButton(true);
      showItem(item);
      groceryList.push(item);

      // Save groceryList to localStorage
      saveList(groceryList);
   }

   // Clear input and add focus
   itemTextInput.value = "";
   itemTextInput.focus();
}

// Clear the list
function clearBtnClick() {
   enableClearButton(false);
   groceryList = [];
   let list = document.querySelector("ol");
   list.innerHTML = "";

   // Remove the grocery list from localStorage
   clearList();
}

function loadList() {
   // TODO: Complete the function
   //get the the item from the localstorage
   const groceryList = localStorage.getItem('list');
   // if found nothig return empty
   if (groceryList === null) {
      return [];
   } else {
      //return string as array
      return groceryList.split(',')
   }
}
function saveList(groceryList) {
   // TODO: Complete the function
   // turn array to string
   // save to localstorage
   localStorage.setItem('list', groceryList.toString());

}

function clearList() {
   // TODO: Complete the function
   // clear all key pair value from the localstorage 
   localStorage.clear()

}
