import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n_kd3ccut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.734 21H3.5V9L6 5V2.5h5.5V5L14 9v4.166M3.5 9H14m-.5 12c0-5 3-7 8-7c0 5-3 7-8 7m0 0l4.5-4.25");
}
</style><path class="n_kd3ccut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:plant-based-aisle"} {...others} />);
}

export default Component;
