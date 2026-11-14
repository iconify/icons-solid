import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.il4xswb_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6A1.5 1.5 0 0 1 16.5 4A1.5 1.5 0 0 1 15 5.5H9A1.5 1.5 0 0 1 7.5 4A1.5 1.5 0 0 1 9 2.5m-.5 3l-4 10q7.5 1.5 15 0l-4-10m-6 10.75v5.25m5-5.25v5.25");
}
</style><path class="il4xswb_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:midi-skirt"} {...others} />);
}

export default Component;
