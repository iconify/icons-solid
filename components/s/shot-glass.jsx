import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jxlohjfan {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.451 6.5h5.098a1.75 1.75 0 0 1 1.74 1.939l-.869 8A1.75 1.75 0 0 1 13.68 18h-3.36a1.75 1.75 0 0 1-1.74-1.561l-.869-8A1.75 1.75 0 0 1 9.451 6.5M8.5 15h7");
}
</style><path class="jxlohjfan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:shot-glass"} {...others} />);
}

export default Component;
