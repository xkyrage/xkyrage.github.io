let arr={
  
  "ml": [
    {
      "thumb": "https://storage.googleapis.com/kaggle-datasets-images/310/684/3503c6c827ca269cc00ffa66f2a9c207/dataset-cover.jpg",
      "title": "Credit card fraud detection",
      "date": "06/18/2019",
      "desc": "",
      "href": ""
    },
    {
      "thumb": "https://images.unsplash.com/photo-1506563805286-a52f937ec9ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
      "title": "Rain In Australia",
      "date": "07/31/2019",
      "desc": "In this project, I tried to build a model which will predict if it is going to rain rain tomorrow! From the start we...",
      "href": "https://github.com/AleksaCupic/Rain-in-Australia--CIS-410-Project-"
    },
    {
      "thumb": "https://sebastianraschka.com/images/faq/logistic-why-sigmoid/7.png",
      "title": "Logistic Regression (Implementaion)",
      "date": "07/19/2019",
      "desc": "My first implementation of Logistic Regression (without regularization) from scratch.",
      "href": "https://github.com/AleksaCupic/LogisticRegressionImplementation"
    }
  ],
  
  //Templates
  "templates": [
    {
      "thumb": "https://screenshot.codepen.io/1237304.ZNQjJg.779bc30d-7d2c-42e6-9c86-2892619257d7.png",
      "title": "Magala Blog Magazine Template (Responsive)",
      "date": "05/09/2019",
      "desc": "Magala is a large magazine & blog HTML template created especially for blog and magazine business.",
      "href": "https://codepen.io/cercatrova/pen/ZNQjJg"
    },
    {
       "thumb": "https://screenshot.codepen.io/1237304.BPqLyb.11d0d8bd-255c-4887-888a-30b550853b4d.png",
      "title": "Lander Uni. Film Festival Template (Responsive)",
      "date": "08/07/2018",
      "desc": "HTML template for Lander Uni. film festival.",
      "href": "https://codepen.io/cercatrova/pen/BPqLyb"
    },
    {
       "thumb": "https://i.ibb.co/pLPgjbH/tech-mag.png",
      "title": "Technology Magazine Template",
      "date": "07/30/2018",
      "desc": "Technology Magazine Template(Responsive). Feel free to edit it as you wish",
      "href": "https://codepen.io/cercatrova/pen/BPqLyb"
    },
    {
       "thumb": "https://screenshot.codepen.io/1237304.QXmgdr.small.01ccda2a-4646-4938-aaf2-59be31f57f2a.png",
      "title": "Portfolio Template (Responsive)",
      "date": "07/01/2019",
      "desc": "This is the template for this part of my website. Fell free to use it",
      "href": "https://codepen.io/cercatrova/pen/BPqLyb"
    },
    {
       "thumb": "https://screenshot.codepen.io/1237304.bKZXqd.small.233bb3cb-9686-4c96-8c34-e2a98f358c24.png",
      "title": "Architecture Template (Responsive)",
      "date": "07/01/2019",
      "desc": "This is the template for this part of my website. Fell free to use it",
      "href": "https://codepen.io/cercatrova/pen/bKZXqd"
    },
    {
       "thumb": "https://screenshot.codepen.io/1237304.mzgpEY.small.2bac90b8-12f4-4109-8645-ad962e223750.png",
      "title": "My Blog-Home Screen",
      "date": "10/29/2018",
      "desc": "This is the template for this part of my website. Fell free to use it",
      "href": "https://codepen.io/cercatrova/pen/mzgpEY"
    },
    {
      "thumb": "https://i.ibb.co/h71Qdg1/cup-of-couple.png",
      "title": "Cup of Couple",
      "date": "05/09/2018",
      "desc": "This is a simple design concept for a fashion landing page.  (Bootstrap 4.1)",
      "href": "https://codepen.io/cercatrova/pen/YLejwq"
    }
   
  ],
    
  //Featured
  "featured": [
    {
      "thumb": "https://images.unsplash.com/photo-1506563805286-a52f937ec9ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
      "title": "Rain In Australia",
      "date": "07/31/2019",
      "desc": "In this project, I tried to build a model which will predict if it is going to rain rain tomorrow! ",
      "href": "https://github.com/AleksaCupic/Rain-in-Australia--CIS-410-Project-"
    },
    {
       "thumb": "https://screenshot.codepen.io/1237304.BPqLyb.11d0d8bd-255c-4887-888a-30b550853b4d.png",
      "title": "Lander Uni. Film Festival Template",
      "date": "08/07/2018",
      "desc": "HTML template for Lander Uni. film festival.",
      "href": "https://codepen.io/cercatrova/pen/BPqLyb"
    },
    {
      "thumb": "https://sebastianraschka.com/images/faq/logistic-why-sigmoid/7.png",
      "title": "Logistic Regression (Implementaion)",
      "date": "07/19/2019",
      "desc": "My first implementation of Logistic Regression (without regularization) from scratch.",
      "href": "https://github.com/AleksaCupic/LogisticRegressionImplementation"
    }
   ]
}

// keep track of loads
let load_count=5;
// since featured is automatically loaded it's the first previous tab
// this is to underline current tab and remove underline from previous
let prev_tab="featured";

let current_tab;

/* MAIN METHOD*/
function load(pointer){
	let container= document.getElementById('projects_holder');
  
  //init current tab
  current_tab=pointer
  
  // Clean the container
  container.innerHTML = ""
  
  // Remove load button if there is any
  removeLoadButton()
 
  // Reset load count
  load_count=5
  
   // Underline Selected Label
  underlineLabel(pointer)
  
  // load posts
	loadPosts(arr[pointer], container)
}


function loadPosts(pointer, container){
   // I do not want to load all projects, limit 4 
  // loadMore function will load more content (>4 projects)
  if(pointer.length < 6){
		for(let i=0; i<pointer.length; i++){
      container.insertAdjacentHTML('beforeend', stringifyProject(pointer[i]));
		}
	}else if(pointer.length>=6){
    for(let i=0; i<pointer.length; i++){
       container.insertAdjacentHTML('beforeend', stringifyProject(pointer[i]));
      
      if(i==load_count){
        // add load button after 6 posts loaded
        addLoadButton(pointer, i)
        break;
      }
    }
  }
}


function loadMorePosts(pointer){
  let container= document.getElementById('projects_holder');
  for(let i=load_count+1; i<arr[pointer].length;i++){
    container.insertAdjacentHTML('beforeend', stringifyProject(arr[pointer][i]));
  }
  load_count=arr[pointer].length
  addLoadButton(arr[pointer],load_count);
}


function stringifyProject(param){
  return `<div class="project col-6"> <div class="project_body" style="background:linear-gradient(rgba(0,0,0,.8), rgba(198, 198, 198,0.5)), url(${param.thumb}); background-repeat: no-repeat; background-size: 110% 260px;"> <div class="project_info"> <div class="title"> <h3><a href="${param.href}">${param.title}</a></h3> </div> <div class="date"> <span>${param.date}</span> </div> <div class="desc"> <span> ${param.desc} </span> </div> </div> </div> </div>`
}

// Skill labels manipulation function for adding and removing underline
function underlineLabel(pointer){
  // Unselects the previous label
  document.getElementById(prev_tab).setAttribute("style", "text-decoration: none")
  prev_tab=pointer;
  
  return document.getElementById(pointer).setAttribute("style", "text-decoration: underline;");
}

// Button Manipulation functions
function addLoadButton(file, index){
  let container_id=document.getElementById("load_more")
  console.log('file length'+file.length+"\nindex "+index)
  return (file.length==index)  ? allLoaded(container_id) : loadMore(container_id);
}

function removeLoadButton(){
  return document.getElementById("load_more").innerHTML=""
}

function allLoaded(container_id){
  return container_id.innerHTML= '<p>All loaded</p>'
}

function loadMore(container_id){
  return container_id.innerHTML= `<button class="btn" onclick="loadMorePosts('${current_tab}')">Load More</button>`
}

function scrollToBottom(){
  return window.scrollTo(0, document.body.scrollHeight)
}



// load featured
load("featured")



