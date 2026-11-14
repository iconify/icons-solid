import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ubwe0bi1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12V9.5a7 7 0 0 1 14 0V12M5 12za2 2 0 0 1 2 2v3a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m14 0za2 2 0 0 1 2 2v3a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2M5 19q0 2.5 3.5 2.5h3");
}
</style><path class="ubwe0bi1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dispatcher-headset"} {...others} />);
}

export default Component;
