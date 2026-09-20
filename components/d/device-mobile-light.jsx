import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ujxfvkucb {
  fill: currentColor;
  d: path("M176 18H80a22 22 0 0 0-22 22v176a22 22 0 0 0 22 22h96a22 22 0 0 0 22-22V40a22 22 0 0 0-22-22M70 62h116v132H70Zm10-32h96a10 10 0 0 1 10 10v10H70V40a10 10 0 0 1 10-10m96 196H80a10 10 0 0 1-10-10v-10h116v10a10 10 0 0 1-10 10");
}
</style><path class="ujxfvkucb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:device-mobile-light"} {...others} />);
}

export default Component;
