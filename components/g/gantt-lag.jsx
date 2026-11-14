import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nth5ffbmb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3H8a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2a2 2 0 0 1 2-2M16 17h3.5a2 2 0 0 1 2 2a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-8.5-5h9M9.75 9.75L7.5 12l2.25 2.25m4.5-4.5L16.5 12l-2.25 2.25");
}
</style><path class="nth5ffbmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gantt-lag"} {...others} />);
}

export default Component;
