import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tyuyz8m2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.25a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m6.5 0l8.5-7.5m-.5-1.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8 9h.01");
}
</style><path class="tyuyz8m2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:crank"} {...others} />);
}

export default Component;
