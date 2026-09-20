import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.e7pr4ob8p {
  fill: currentColor;
  d: path("M124 128a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h72a4 4 0 0 1 4 4M48 68h136a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8m56 120H48a4 4 0 0 0 0 8h56a4 4 0 0 0 0-8m122.83-22.83a4 4 0 0 0-5.66 0L188 198.34V112a4 4 0 0 0-8 0v86.34l-33.17-33.17a4 4 0 0 0-5.66 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66");
}
</style><path class="e7pr4ob8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:sort-ascending-thin"} {...others} />);
}

export default Component;
