import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.sn6-rybas {
  fill: currentColor;
  d: path("M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM76 76a8 8 0 1 1 8 8a8 8 0 0 1-8-8m44 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m44 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m20 32H72a4 4 0 0 0-4 4v72a4 4 0 0 0 4 4h112a4 4 0 0 0 4-4v-72a4 4 0 0 0-4-4m-4 72H76v-64h104Z");
}
</style><path class="sn6-rybas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:oven-thin"} {...others} />);
}

export default Component;
