import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bosu5un9r {
  fill: currentColor;
  d: path("M104 20.41a19.83 19.83 0 0 0-22.4 11.81c-.07.15-.13.31-.19.46L21.47 192.49A20 20 0 0 0 40 220h60a20 20 0 0 0 20-20V40a19.83 19.83 0 0 0-16-19.59M96 196H45.79L96 62.09Zm138.53-3.51L174.61 32.68c-.06-.15-.12-.31-.19-.46A20 20 0 0 0 136 40v160a20 20 0 0 0 20 20h60a20 20 0 0 0 18.54-27.51ZM160 196V62.09L210.21 196Z");
}
</style><path class="bosu5un9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:flip-horizontal-bold"} {...others} />);
}

export default Component;
