import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cgipwwbaw {
  fill: currentColor;
  d: path("M4 13c0-1.317.335-2.748 1.293-3.707l3-3a5.243 5.243 0 0 1 7.414 0l3 3C19.665 10.252 20 11.683 20 13v6h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1Zm6 6h4v-3a2 2 0 1 0-4 0Z");
}
</style><path class="cgipwwbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-alt-2-fill-round"} {...others} />);
}

export default Component;
