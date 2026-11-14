import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c767o4b0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5a3.5 2 0 1 0 7 0a3.5 2 0 1 0-7 0m1.25-6.75a3.5 2 0 1 0 7 0a3.5 2 0 1 0-7 0M5 6a3.5 2 0 1 0 7 0a3.5 2 0 1 0-7 0m13.5 15V3.5m-3 3l3-3l3 3");
}
</style><path class="c767o4b0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:funding-round"} {...others} />);
}

export default Component;
