import { type RequestHandler } from '@sveltejs/kit'

export const prerender = true

export const GET: RequestHandler = async ({}) => {
	const res = `                  888        888                                 888                        
                  888        888                                 888                        
                  888        888                                 888                        
 .d8888b  8888b.  888888 .d88888  .d88b.   .d88b.  .d8888b   .d88888  .d88b.  888  888      
d88P"        "88b 888   d88" 888 d88""88b d8P  Y8b 88K      d88" 888 d8P  Y8b 888  888      
888      .d888888 888   888  888 888  888 88888888 "Y8888b. 888  888 88888888 Y88  88P      
Y88b.    888  888 Y88b. Y88b 888 Y88..88P Y8b.          X88 Y88b 888 Y8b.      Y8bd8P       
 "Y8888P "Y888888  "Y888 "Y88888  "Y88P"   "Y8888   88888P'  "Y88888  "Y8888    Y88P        

I'm cat, I do full-stack software development.
This portfolio contains my blog posts and links to some of the projects I've made.

=> Blog           https://catdoes.dev/blog.txt
=> Projects       https://catdoes.dev/projects.txt

=> GitHub         https://github.com/mat-1
=> Matrix         https://matrix.to/#/@mat:matdoes.dev
=> Ko-fi (donate) https://ko-fi.com/matdoesdev 
`
	return new Response(res, {
		headers: {
			'content-type': 'text/plain; charset=utf-8',
		},
	})
}
