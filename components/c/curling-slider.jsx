import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z1bs7vbsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 14V7a2 2 0 0 1 2-2h3.5l2 4l7 1.5c2 .5 3 1.5 3 3.5Zm1.25 2.5h15a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 19.5 19h-15a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 4.5 16.5");
}
</style><path class="z1bs7vbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:curling-slider"} {...others} />);
}

export default Component;
