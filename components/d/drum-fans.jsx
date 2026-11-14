import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7vbhj0-w {
  d: path("M4.5 13.5a7.5 2.5 0 1 0 15 0a7.5 2.5 0 1 0-15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m40iitbdq {
  d: path("M4.5 13.5V19a7.5 2.5 0 0 0 15 0v-5.5m-14-11L15 8m3.5-5.5L9 8");
}
</style><g class="hntgybcog"><path class="h7vbhj0-w"/><path class="m40iitbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drum-fans"} {...others} />);
}

export default Component;
