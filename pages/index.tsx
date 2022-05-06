import type { GetStaticProps } from 'next'
import Head from 'next/head'
import client from '../contentful/index'

export default function Home({home}: {home: any}) {
  return (
    <div>
      <Head>
        <title>{home.fields.title}</title>
      </Head>

      <main>
				<h1>{home.fields.title}</h1>
      </main>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
	
	const home = await client.getEntries({
		content_type: 'home',
	})
	
	const [homePage] = home.items
 
	return {
		props: {
			home: homePage,
			title: 'Мой Блог'
		},
		revalidate: 3600
	}
}