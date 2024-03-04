
let allPost = []

const loadCard = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const cards = data.posts;
    // console.log(cards);
    allPost = cards;
    displayCards(cards);
    // displayTitleCards(titleCards);
}

const displayCards = cards => {
        // console.log(cards);
        // step - 1 
        const cardContainer = document.getElementById('card-container');
        cards.forEach(cards => {
            console.log(cards);
            // step-2 create div
            const cardDiv =document.createElement('div');
            // cardDiv.classList = `flex grid-cols-2 card-1 gap-5 shadow-xl gap-8`;
            // step 3 inner html
            cardDiv.innerHTML = `
            <div class="flex grid-cols-2 card-1 gap-8 shadow-xl pb-8 mb-5"> 
          <div><div class="indicator ind ml-8 mt-8"> 
            <span class="indicator-item badge badge-secondary ${cards.isActive?  "bg-green-600": "bg-red-600"}"> </span> 
            <div class="grid w-20 h-20 bg-base-300 place-items-center rounded-lg"> <img class="rounded-lg" src="${cards.image}" alt="">  </div>
          </div></div>
          <div class="mt-8 ml-2 card-type leading-10">
            <p> # <span>${cards.category}</span>   Author: <span>${cards.author.name}</span></p>
            <h1 class="card-title"> <span> ${cards.title}</span> </h1>
            <p class="card-text"> <span> ${cards.description}</p>
            <hr class="mt-6 w-[596px]">
            <div class="flex grid-cols-2 justify-between">
              <div><div class="mt-10 flex grid-cols-3 gap-10"> 
                <div class="flex grid-cols-2 gap-3"> <div><svg width="22.500000" height="21.333374" viewBox="0 0 22.5 21.3334" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
               
                 <defs/>
                 <path id="Vector" d="M6.58334 6.58337L15.9167 6.58337M6.58334 11.25L13.5833 11.25M4.25 17.0834C3.32174 17.0834 2.4315 16.7146 1.77512 16.0582C1.11875 15.4019 0.75 14.5116 0.75 13.5834L0.75 4.25C0.75 3.32178 1.11875 2.43152 1.77512 1.77515C2.4315 1.11877 3.32174 0.75 4.25 0.75L18.25 0.75C19.1783 0.75 20.0685 1.11877 20.7249 1.77515C21.3812 2.43152 21.75 3.32178 21.75 4.25L21.75 13.5834C21.75 14.5116 21.3812 15.4019 20.7249 16.0582C20.0685 16.7146 19.1783 17.0834 18.25 17.0834L14.75 17.0834L11.25 20.5834L7.75 17.0834L4.25 17.0834Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
               </svg></div>   <div class="-mt-3">  <span >${cards.comment_count} </span> </div></div>
                <div class="flex grid-cols-2 gap-3"> <div><svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                
                 <defs/>
                 <path id="Vector" d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
               </svg>
               </div>   <div class="-mt-3">  <span >${cards.view_count} </span> </div></div>
                <div class="flex grid-cols-2 gap-3"> <div><svg width="22.500000" height="22.500000" viewBox="0 0 22.5 22.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                 
                 <defs/>
                 <path id="Vector" d="M1.54926 15.2682C2.07694 16.5421 2.85036 17.6996 3.82538 18.6746C4.80039 19.6497 5.95791 20.4231 7.23183 20.9507C8.50574 21.4784 9.87112 21.75 11.25 21.75C12.6289 21.75 13.9943 21.4784 15.2682 20.9507C16.5421 20.4231 17.6996 19.6497 18.6746 18.6746C19.6496 17.6996 20.4231 16.5421 20.9507 15.2682C21.4784 13.9943 21.75 12.6289 21.75 11.25C21.75 9.87109 21.4784 8.50574 20.9507 7.23181C20.4231 5.95789 19.6496 4.80042 18.6746 3.82544C17.6996 2.85034 16.5421 2.0769 15.2682 1.54932C13.9943 1.02161 12.6289 0.75 11.25 0.75C9.87112 0.75 8.50574 1.02161 7.23183 1.54932C5.95791 2.0769 4.80039 2.85034 3.82538 3.82544C2.85036 4.80042 2.07694 5.95789 1.54926 7.23181C1.02159 8.50574 0.75 9.87109 0.75 11.25C0.75 12.6289 1.02159 13.9943 1.54926 15.2682ZM11.25 5.41663L11.25 11.25L7.16666 11.25" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
               </svg>
               </div>   <div class="-mt-3">  <span >${cards.posted_time}</span> min </div></div>
                 
               </div> 
              </div>
              <div class="mt-10">
               <button id="mark" onclick="buttonHandler('${cards.title}','${cards.view_count}')" class="read-button"> <p></p> <svg width="27.999817" height="28.000000" viewBox="0 0 27.9998 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
               
                  <defs/>
                  <path id="Vector" d="M13.9997 0C6.26794 0 0 6.26819 0 13.9999C0 21.7314 6.26794 28 13.9997 28C21.7314 28 27.9998 21.7314 27.9998 13.9999C27.9998 6.26819 21.7314 0 13.9997 0ZM13.9999 4.91736L22.2846 10.0835L5.71533 10.0835L13.9999 4.91736ZM22.3878 18.333L22.387 18.333C22.387 19.1616 21.7154 19.833 20.8869 19.833L7.11301 19.833C6.28439 19.833 5.61295 19.1615 5.61295 18.333L5.61295 10.4122C5.61295 10.3246 5.62189 10.2394 5.63644 10.1556L13.5519 15.0914C13.5616 15.0974 13.572 15.1016 13.582 15.1072C13.5925 15.1129 13.6031 15.1185 13.6137 15.1239C13.6696 15.1527 13.7272 15.176 13.7861 15.1912C13.7922 15.1929 13.7982 15.1936 13.8043 15.1949C13.8689 15.2102 13.9343 15.2197 13.9997 15.2197L14.0002 15.2197C14.0006 15.2197 14.0011 15.2197 14.0011 15.2197C14.0664 15.2197 14.1318 15.2104 14.1964 15.1949C14.2025 15.1935 14.2086 15.1929 14.2146 15.1912C14.2734 15.176 14.3308 15.1527 14.387 15.1239C14.3976 15.1185 14.4083 15.1129 14.4187 15.1072C14.4286 15.1016 14.4391 15.0974 14.4488 15.0914L22.3643 10.1556C22.3788 10.2394 22.3878 10.3243 22.3878 10.4122L22.3878 18.333Z" fill="#10B981" fill-opacity="1.000000" fill-rule="nonzero"/>
                </svg> </button> 
              </div>
            </div>
          </div>
        </div>`;
        // step 4 append child 
            cardContainer.appendChild(cardDiv);
        })
}

// Handle search button 
const handleSearch = ( ) => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    console.log(searchText)
}


const toggleLoadingSpinner = () => {
  const loadingSpinner = document.getElementById('loading-spinner');
 
  setTimeout(() => {
    console.log(loadingSpinner)
  },2000);
  
 } 






let count =0;
const buttonHandler = (title,view_count) => {
  // console.log(cards)
  // console.log(view_count)
  const currentNumber =document.getElementById('read-count');
          count = count +1;
          currentNumber.innerText = count;
// const readTitle = document.getElementById('mark-read');
// readTitle.innerText = title;

const titleCardContainer = document.getElementById('mark-read');
        // allPost.forEach(post => {
            // console.log(id);
            // step-2 create div
            const titleCardDiv =document.createElement('div');
            // cardDiv.classList = `flex grid-cols-2 card-1 gap-5 shadow-xl gap-8`;
            // step 3 inner html
            titleCardDiv.innerHTML = `
            <div class="title-cards flex grid-cols-2 justify-between -ml-3 mb-3"> 
           <div> <h1 class="text-sm ml-2 mt-4"> ${title} </h1> </div>
            <div class="ml-2 mt-4">
              <p class="inline-flex gap-2"><svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          
                <defs/>
                <path id="Vector" d="M9.6001 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.5376 12.8999 6.1001C12.4623 5.6626 11.8688 5.41675 11.25 5.41675C10.6312 5.41675 10.0377 5.6626 9.6001 6.1001C9.16248 6.5376 8.91669 7.1311 8.91669 7.75C8.91669 8.3689 9.16248 8.96228 9.6001 9.3999ZM11.25 14.75C7.04999 14.75 3.54999 12.4166 0.75 7.75C3.54999 3.08325 7.04999 0.75 11.25 0.75C15.45 0.75 18.95 3.08325 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z" stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000" stroke-linejoin="round"/>
              </svg>
              <span class="-mt-1 text-sm mr-2">${view_count}</span>
              </p>
    
            </div>
          </div>`;
        // step 4 append child 
            titleCardContainer.appendChild(titleCardDiv);
       

        
}
// spinner 




loadCard()