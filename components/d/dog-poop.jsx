import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k0hdn_25m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21h13a2.75 2.75 0 0 0-1-5.25a2.75 2.75 0 0 0-2-4.75a2.75 2.75 0 0 0-3-4.5c0-1.5-.5-2.5-2-3c0 2-1.5 3-2.5 3.5a2.25 2.25 0 0 0 .5 4a2.75 2.75 0 0 0-2 4.75a2.75 2.75 0 0 0-1 5.25m1-5.25h11M8.5 11h7");
}
</style><path class="k0hdn_25m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dog-poop"} {...others} />);
}

export default Component;
