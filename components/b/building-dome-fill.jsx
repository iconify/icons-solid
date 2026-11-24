import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ar048tyiu {
  fill: currentColor;
  d: path("M21 10H3a1 1 0 0 1 0-2h1.08c.254-1.57 1.119-2.973 2.319-4.002c3.11-2.664 8.092-2.664 11.202 0C18.801 5.027 19.666 6.43 19.92 8H21a1 1 0 0 1 0 2M7 13v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m4 0v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m4 0v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m4 0v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m2 9H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2");
}
</style><path class="ar048tyiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-dome-fill"} {...others} />);
}

export default Component;
