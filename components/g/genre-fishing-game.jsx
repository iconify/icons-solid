import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pjbb77b8t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5Q6 7 17 3m0 0v8m0 0c2.75 1.5 3 5.5 0 8l2.5 2.5h-5L17 19c-3-2.5-2.75-6.5 0-8");
}
</style><path class="pjbb77b8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:genre-fishing-game"} {...others} />);
}

export default Component;
