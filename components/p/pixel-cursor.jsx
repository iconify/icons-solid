import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pj6j9nbel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 3v15.5h2.5V16h2.5v2.5h2.5V21h5v-2.5h-2.5V16h2.5v-2.5h-2.5V11h-2.5V8.5h-2.5V6h-2.5V3Zm5 13h5");
}
</style><path class="pj6j9nbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pixel-cursor"} {...others} />);
}

export default Component;
