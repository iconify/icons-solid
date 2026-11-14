import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xuslijb4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12.5v-5q4.5 2 8-.5c4.5 0 9 2.5 9 5.5m-15.75 0h14.5a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 19.25 17H4.75a2.25 2.25 0 0 1-2.25-2.25a2.25 2.25 0 0 1 2.25-2.25");
}
</style><path class="xuslijb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:espadrille"} {...others} />);
}

export default Component;
