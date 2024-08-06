import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function clientLoader({ params }: LoaderFunctionArgs) {
  const id = params?.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
}

export default function Blog() {
  const data = useLoaderData<typeof clientLoader>();
  return (
    <div className="font-sans p-4">
      <h1>{data?.title}</h1>
      <div>{data?.body}</div>
    </div>
  );
}
