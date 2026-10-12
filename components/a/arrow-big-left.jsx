import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.odq9i6bhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.99 11.01l6.77-6.77q.99-.99.99.41V7.1q0 1.4 1.4 1.4h6.2q1.4 0 1.4 1.4v4.2q0 1.4-1.4 1.4h-6.2q-1.4 0-1.4 1.4v2.45q0 1.4-.99.41l-6.77-6.77q-.99-.99 0-1.98");
}
</style><path class="odq9i6bhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:arrow-big-left"} {...others} />);
}

export default Component;
