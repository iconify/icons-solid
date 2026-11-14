import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jfdc61bzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5h8c0 3-1.75 5-4 5s-4-2-4-5m11 0h8c0 3-1.75 5-4 5s-4-2-4-5m-11 5h19m-15-15c2 3 2.25 4.5 2.25 5a2.25 2.25 0 0 1-4.5 0c0-.5.25-2 2.25-5m11 0c2 3 2.25 4.5 2.25 5a2.25 2.25 0 0 1-4.5 0c0-.5.25-2 2.25-5");
}
</style><path class="jfdc61bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:diya-pair"} {...others} />);
}

export default Component;
