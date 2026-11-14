import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vf52lccad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3C3.5 9 8.5 14 6 21m4.5-18C8 9 13 14 10.5 21M15 3c-2.5 5 2 6.5 0 10m3 1.5v7m-3-3l3 3l3-3");
}
</style><path class="vf52lccad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hair-thinning"} {...others} />);
}

export default Component;
