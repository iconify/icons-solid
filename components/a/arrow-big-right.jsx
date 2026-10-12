import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f6lso2bkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20.01 12.99l-6.77 6.77q-.99.99-.99-.41V16.9q0-1.4-1.4-1.4h-6.2q-1.4 0-1.4-1.4V9.9q0-1.4 1.4-1.4h6.2q1.4 0 1.4-1.4V4.65q0-1.4.99-.41l6.77 6.77q.99.99 0 1.98");
}
</style><path class="f6lso2bkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:arrow-big-right"} {...others} />);
}

export default Component;
