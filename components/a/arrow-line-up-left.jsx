import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.piplgf5nt {
  fill: currentColor;
  d: path("M232 208a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M72 152a8 8 0 0 0 8-8V67.31l98.34 98.35a8 8 0 0 0 11.32-11.32L91.31 56H168a8 8 0 0 0 0-16H72a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8");
}
</style><path class="piplgf5nt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-up-left"} {...others} />);
}

export default Component;
