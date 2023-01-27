const noteInput = document.querySelector('.note-input');
const addButton = document.querySelector('.add-btn');
const allNotes = document.querySelector('.all-notes');


let i = 1;
function displayOrderNum() {
  return i++;
 }


addButton.addEventListener('click', ()=> {
    allNotes.innerHTML += `<div class="col-sm-6 mb-3 mb-sm-0 my-4 max-height: 100px">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Note: ${displayOrderNum()}</h5>
        <p class="card-text  text-truncate">  
          ${noteInput.value}
        </p>
        <a href="#" class="btn btn-primary details">View Detail</a>
      </div>
    </div>
  </div>`

const viewDetailsButtons = document.querySelectorAll('.details');
const buttonsArr = Array.prototype.slice.call(viewDetailsButtons);

buttonsArr.forEach(button => {
  button.addEventListener('click', (e) => {
    const overlay = document.querySelector('.overlay'); 
    const div = document.createElement('div');
    div.classList.add('note-details');
    overlay.classList.add('center');
    div.innerHTML = `<a href="#" class="closeBtn"><i class="fa-solid fa-xmark"></i></a><p>${(e.target.parentElement.children[1]).textContent}</p>`;
    overlay.appendChild(div);
    overlay.style.display = 'block';

   
    const closeBtns = document.querySelectorAll('.closeBtn');
    closeBtns.forEach(button => {
        button.addEventListener('click', () => {
          overlay.style.display = 'none';
        })
    })
  })
})
noteInput.value = '';
})




