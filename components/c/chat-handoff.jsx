import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l6j9uglqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h4a2.5 2.5 0 0 1 2.5 2.5V8A2.5 2.5 0 0 1 9 10.5H6l-3.25 2.75V5.5A2.5 2.5 0 0 1 5 3m10 8h4a2.5 2.5 0 0 1 2.5 2.5v7.25l-3.25-2.25H15a2.5 2.5 0 0 1-2.5-2.5v-2.5A2.5 2.5 0 0 1 15 11m-.75-5.5h6.25M18 3l2.5 2.5L18 8");
}
</style><path class="l6j9uglqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chat-handoff"} {...others} />);
}

export default Component;
