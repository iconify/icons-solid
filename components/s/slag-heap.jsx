import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s8p6pmbba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 20c1-4 3-7 5.5-7.5C8.5 9 10 7 12.5 7s4 2.5 4.5 5c2.5 1 4 4 5 8Zm10-8.5h.01m2.49 4h.01M9.5 16h.01M7 17.5h.01");
}
</style><path class="s8p6pmbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:slag-heap"} {...others} />);
}

export default Component;
