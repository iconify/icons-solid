import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qdjoinxkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5v4c0 3.5 5 3.5 5 7m5-11v4c0 3.5-5 3.5-5 7m0 0v6M8.5 17l3.5 3.5l3.5-3.5");
}
</style><path class="qdjoinxkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:arrow-merge-down"} {...others} />);
}

export default Component;
