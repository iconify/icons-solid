import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.deemz4p9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10.5H17a3 3 0 0 0 0-6A5.5 5.5 0 0 0 7.25 6a2.25 2.25 0 0 0-.75 4.5m-1 2.75l-1 3.25m15-3.25l-1 3.25m-6.5 5v-5m0 2q-4 0-4-3.5q4 0 4 3.5m0-2q4 0 4-3.5q-4 0-4 3.5");
}
</style><path class="deemz4p9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rain-crop"} {...others} />);
}

export default Component;
