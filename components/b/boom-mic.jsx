import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnymg8b5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21.5l13-13M18.75 3za2.75 2.75 0 0 1 2.75 2.75v5.5A2.75 2.75 0 0 1 18.75 14A2.75 2.75 0 0 1 16 11.25v-5.5A2.75 2.75 0 0 1 18.75 3M16 5.75h5.5");
}
</style><path class="fnymg8b5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:boom-mic"} {...others} />);
}

export default Component;
