import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.awya-qgty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5L13 11m0 0c-1.5-3.5.5-7 4-7q3 0 3 3c0 3.5-3.5 5.5-7 4m-8.75 6.25l2.5 2.5");
}
</style><path class="awya-qgty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:glassblowing-pipe"} {...others} />);
}

export default Component;
