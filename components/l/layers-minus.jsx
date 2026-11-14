import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fsoq2845b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.85 3.472l5.396 2.998a1.75 1.75 0 0 1 0 3.06l-5.396 2.998a1.75 1.75 0 0 1-1.7 0L5.754 9.53a1.75 1.75 0 0 1 0-3.06l5.396-2.998a1.75 1.75 0 0 1 1.7 0M3 12l9 5m-9-1l9 5m3-3h6");
}
</style><path class="fsoq2845b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:layers-minus"} {...others} />);
}

export default Component;
