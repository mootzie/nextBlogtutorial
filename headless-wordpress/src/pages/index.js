
export default function Home({posts}){
  console.log({posts})
  return(
    <div>Welcome to home page</div>
  )
}

export async function getStaticProps(){

  const res = await fetch('http://headlesswpnext.local/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query{
            posts{
              nodes{
                slug
                title
              }
            }
          }
          `,
      })
  })


  const json = await res.json()

  return {
    props: {
        posts: json.data.posts,
    },
  }

}