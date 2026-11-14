import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f71-0vbgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 21.5V13m0 0c0-3-2-5-5.5-5c0 3 2 5 5.5 5m0 0c0-3.5 1.5-6 4-6c0 3-1.5 5.25-4 6m9.5 7.5V4M16 6.5L18.5 4L21 6.5");
}
</style><path class="f71-0vbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:plant-growth-arrow"} {...others} />);
}

export default Component;
