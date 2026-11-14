import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nq370tbbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h8V8L8 10.5H2.5Zm5.5 8V8h2.5m3-5.5h8V8L19 10.5h-5.5Zm5.5 8V8h2.5M7.75 13.5h8V19l-2.5 2.5h-5.5Zm5.5 8V19h2.5");
}
</style><path class="nq370tbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:affinity-map"} {...others} />);
}

export default Component;
