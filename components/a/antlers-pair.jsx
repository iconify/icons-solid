import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nxvn4abgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 20.5l-3.25-6L5.5 10l-2-6m5.25 10.5l1-5.5M5.5 10l1.75-5.5m4.75 16l3.25-6L18.5 10l2-6m-5.25 10.5l-1-5.5m4.25 1l-1.75-5.5");
}
</style><path class="nxvn4abgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:antlers-pair"} {...others} />);
}

export default Component;
