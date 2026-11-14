import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ji0a9xn1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 4.5h.25A2.625 2.625 0 0 1 10 7.125v8.25A2.625 2.625 0 0 1 7.375 18h-.25A2.625 2.625 0 0 1 4.5 15.375v-8.25A2.625 2.625 0 0 1 7.125 4.5m9.5 5h.25a2.625 2.625 0 0 1 2.625 2.625v3.25A2.625 2.625 0 0 1 16.875 18h-.25A2.625 2.625 0 0 1 14 15.375v-3.25A2.625 2.625 0 0 1 16.625 9.5M2.5 21h19");
}
</style><path class="ji0a9xn1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:align-bottom"} {...others} />);
}

export default Component;
