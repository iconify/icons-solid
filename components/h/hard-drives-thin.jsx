import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.qc1oelb0a {
  fill: currentColor;
  d: path("M208 140H48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-4-156H48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-24 72a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0-96a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="qc1oelb0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:hard-drives-thin"} {...others} />);
}

export default Component;
