import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.imbkuwbvd {
  fill: currentColor;
  d: path("M208 44H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V72a28 28 0 0 0-28-28M48 68h160a4 4 0 0 1 4 4v16h-52a12 12 0 0 0-12 12a20 20 0 0 1-40 0a12 12 0 0 0-12-12H44V72a4 4 0 0 1 4-4m160 120H48a4 4 0 0 1-4-4v-72h41.66a44 44 0 0 0 84.68 0H212v72a4 4 0 0 1-4 4");
}
</style><path class="imbkuwbvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cardholder-bold"} {...others} />);
}

export default Component;
