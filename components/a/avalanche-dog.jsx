import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gcqm35bpr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9h8l2-4h3.5l2 2.5L19 9v4.5a2 2 0 0 1-2 2H6A3.25 3.25 0 0 1 6 9m-.5 6.5V19M9 15.5V19m5-3.5V19m3.5-3.5V19m-14-9l-1-3m8 4v2.5m-1.25-1.25h2.5");
}
</style><path class="gcqm35bpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:avalanche-dog"} {...others} />);
}

export default Component;
