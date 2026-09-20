import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yoovlob3b {
  fill: currentColor;
  d: path("M200.47 56.07A101.37 101.37 0 0 0 128.77 26H128A102 102 0 0 0 26 128v56a22 22 0 0 0 22 22h16a22 22 0 0 0 22-22v-40a22 22 0 0 0-22-22H38.2A90.12 90.12 0 0 1 192 64.52A89.4 89.4 0 0 1 217.81 122H192a22 22 0 0 0-22 22v40a22 22 0 0 0 22 22h16a22 22 0 0 0 22-22v-56a101.44 101.44 0 0 0-29.53-71.93M64 134a10 10 0 0 1 10 10v40a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10v-50Zm154 50a10 10 0 0 1-10 10h-16a10 10 0 0 1-10-10v-40a10 10 0 0 1 10-10h26Z");
}
</style><path class="yoovlob3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:headphones-light"} {...others} />);
}

export default Component;
