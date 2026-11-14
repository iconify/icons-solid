import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z6k4k-b_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5za2 2 0 0 1 2 2V10a2 2 0 0 1-2 2a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2m14 0za2 2 0 0 1 2 2V10a2 2 0 0 1-2 2a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2M7 7.75h10m1 13.75l-2.75-3A2 2 0 0 1 18 15.75a2 2 0 0 1 2.75 2.75Z");
}
</style><path class="z6k4k-b_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dumbbell-heart"} {...others} />);
}

export default Component;
