import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.esqy5ebvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 19 13h-3.75a3.25 3.25 0 0 0-6.5 0H5a2.5 2.5 0 0 1-2.5-2.5v-5A2.5 2.5 0 0 1 5 3m9.75 15l2 2L21 15.75");
}
</style><path class="esqy5ebvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:vr-headset-check"} {...others} />);
}

export default Component;
