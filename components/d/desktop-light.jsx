import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tsknkzbut {
  fill: currentColor;
  d: path("M208 42H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h74v20H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-20h74a22 22 0 0 0 22-22V64a22 22 0 0 0-22-22M48 54h160a10 10 0 0 1 10 10v82H38V64a10 10 0 0 1 10-10m160 132H48a10 10 0 0 1-10-10v-18h180v18a10 10 0 0 1-10 10");
}
</style><path class="tsknkzbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:desktop-light"} {...others} />);
}

export default Component;
