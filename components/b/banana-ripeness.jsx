import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ym-gsjb6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5c-1.5 6 1 13 8 15l.5-1.5c-5-2.5-6-8-5.5-13Zm1.5.25L5.25 2.5m12 .5h2A1.75 1.75 0 0 1 21 4.75v14.5A1.75 1.75 0 0 1 19.25 21h-2a1.75 1.75 0 0 1-1.75-1.75V4.75A1.75 1.75 0 0 1 17.25 3M15.5 9H21m-5.5 6H21");
}
</style><path class="ym-gsjb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:banana-ripeness"} {...others} />);
}

export default Component;
