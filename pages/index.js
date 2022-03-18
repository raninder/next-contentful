import {createClient} from 'contentful'
export async function getStaticProps(){
  //create connection with contentful space we created
  const client = createClient({
    //get these values from API keys in settings in contentful space 
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

//get entries from contenful using an identifier (recipe is id for our content-type)
const res = await client.getEntries({ content_type: 'recipe' });  
	return {
		props: { 
    recipes: res.items //recipes is any props name and res.items is entries from recipe
    },
		 revalidate: 1,
	};
}
//pass props recipes to component to display
export default function Recipes(recipes) {
  console.log("recipes", recipes);
  return (
    <div className="recipe-list">
      Recipe List
    </div>
  )
}