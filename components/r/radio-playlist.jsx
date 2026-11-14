import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xlc_cwbhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h17m-17 5h17m-17 5H10m6 2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1.5-3a4.25 4.25 0 0 0 0 6m6-6a4.25 4.25 0 0 1 0 6");
}
</style><path class="xlc_cwbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:radio-playlist"} {...others} />);
}

export default Component;
