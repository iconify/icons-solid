import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.h08fewbar {
  fill: currentColor;
  d: path("M208 92H48a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-96a12 12 0 0 0-12-12m4 108a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM52 64a4 4 0 0 1 4-4h144a4 4 0 0 1 0 8H56a4 4 0 0 1-4-4m16-32a4 4 0 0 1 4-4h112a4 4 0 0 1 0 8H72a4 4 0 0 1-4-4");
}
</style><path class="h08fewbar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cards-three-thin"} {...others} />);
}

export default Component;
