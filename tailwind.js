let allCart = document.getElementById("all")
let design = document.getElementById("design")
let marketing = document.getElementById("marketing")
let finance = document.getElementById("finance")
let music = document.getElementById("music")
let education = document.getElementById("education")


let manCart = document.querySelector(".mb-20")

const browserTopic =[
        {
          category: "design",
          title: "Web Design",
          description: "Topic Listing Template based on Bootstrap 5",
          number: 14,
          image_src: "./illustrated.jpg"
        },
        {
          category: "design",
          title: "Graphic",
          description: "Lorem Ipsum dolor sit amet consectetur",
          number: 75,
          image_src: "./stack-green-brown-boxes-with-money-top-them_1187092-31993.jpg"
        },
        {
          category: "design",
          title: "Logo Design",
          description: "Creative logo concepts and ideas",
          number: 100,
          image_src: "./productivity-concept-with-people-scene-flat-cartoon-style-highly-productive-employee_198565-6947.jpg"
        },
      
        {
          category: "marketing",
          title: "Digital Marketing",
          description: "Strategies for online brand growth",
          number: 40,
          image_src: "./marketing-ideas-share-research-planning-concept.jpg"
        },
        {
          category: "marketing",
          title: "SEO Basics",
          description: "Learn how to optimize your site",
          number: 30,
          image_src: "./ai-technology-digital-marketing-sales-analytics.jpg"
        },
        {
          category: "marketing",
          title: "Social Media Ads",
          description: "Effective ad campaigns",
          number: 55,
          image_src: "./113-1133188_digital-marketing-png-pic-digital-marketing-plan-png.png"
        },
      
        {
          category: "finance",
          title: "Personal Finance",
          description: "Manage your monthly budget",
          number: 28,
          image_src: "./pngtree-a-graphic-designer-man-work-on-laptop-png-image_12650928.png"
        },
        {
          category: "finance",
          title: "Investing 101",
          description: "Beginner's guide to investing",
          number: 60,
          image_src: "./pngwing.com.png"
        },
        {
          category: "finance",
          title: "Tax Planning",
          description: "Save more with smart planning",
          number: 18,
          image_src: "./pngwing.com (1).png"
        },
      
        {
          category: "music",
          title: "Guitar Basics",
          description: "Learn chords and strumming",
          number: 45,
          image_src: "./pngwing.com (2).png"
        },
        {
          category: "music",
          title: "Music Theory",
          description: "Understand the language of music",
          number: 35,
          image_src: "./pngwing.com (3).png"
        },
        {
          category: "music",
          title: "Beat Making",
          description: "Create your own beats",
          number: 70,
          image_src: "./pngwing.com (4).png"
        },
      
        {
          category: "education",
          title: "Math Essentials",
          description: "Build a strong math foundation",
          number: 85,
          image_src: "./pngwing.com (5).png"
        },
        {
            category: "education",
          title: "Science Experiments",
          description: "Fun projects to learn science",
          number: 52,
          image_src: "./pngwing.com (6).png"
        },
        {
            category: "education",
          title: "History Facts",
          description: "Explore world history timelines",
          number: 44,
          image_src: "./pngwing.com (7).png"
        }
      ];

      
let currentCategory;

function allData(data = browserTopic){
    manCart.innerHTML = ""
    data.forEach(element => {
        let cart = document.createElement("div")
        cart.className = "w-80 h-72 bg-white rounded-xl p-3 drop-shadow-xl"
        cart.innerHTML =`
        <p class="text-lg">Title - ${element.title}            <span class="bg-blue-400 text-white p-1 rounded-md text-sm">${element.number}</span></p>
        <p class="pr-10 ">Description - <span class="text-sm text-slate-500 mt-2">${element.description}</span</p>
        <img class="w-52 h-42 ml-10 mt-3"" src="${element.image_src}"/>
        `;
        manCart.appendChild(cart)
      });
}

function categoryfilter(category){
    return browserTopic.filter(item => item.category === category);
}

function categoryClick(category){
        if(currentCategory === category)
        currentCategory = category
        let data = categoryfilter(category)
        allData(data)
        console.log(allData);
    }

allData()

let buttons = document.querySelectorAll(".cursor-pointer")

function setActionBtn(activeBtn){
  buttons.forEach(btn =>{
    btn.classList.remove("text-blue-500", "border-blue-500")
    btn.classList.add("text-blue", "border-transparent")
  });
  activeBtn.classList.remove("text-black", "border-transparent")
  activeBtn.classList.add("text-blue-500", "border-blue-500")
}

allCart.addEventListener("click",()=>{
    allData()
    setActionBtn(allCart)
})

design.addEventListener("click",()=> {
  categoryClick("design")
  setActionBtn(design)
})
marketing.addEventListener("click",()=>{
  categoryClick("marketing")
  setActionBtn(marketing)
})
finance.addEventListener("click",()=>{
  categoryClick("finance")
  setActionBtn(finance)
})
music.addEventListener("click",()=>{
  categoryClick("music")
  setActionBtn(music)
})
education.addEventListener("click",()=>{
  categoryClick("education")
  setActionBtn(education)
})