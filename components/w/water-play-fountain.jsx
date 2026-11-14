import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lnd3h-cge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm9-3v-9m-3 9Q8 4 4 12m11 .5q1-8.5 5-.5");
}
</style><path class="lnd3h-cge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:water-play-fountain"} {...others} />);
}

export default Component;
