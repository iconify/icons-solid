import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.llu32mb1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8v4a8 8 0 0 0 16 0V8m-8.413-3.05l5.664-2.642a1.375 1.375 0 0 1 1.827.665a1.375 1.375 0 0 1-.665 1.827l-5.664 2.642a1.375 1.375 0 0 1-1.827-.665a1.375 1.375 0 0 1 .665-1.827");
}
</style><path class="llu32mb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:snowboard-halfpipe"} {...others} />);
}

export default Component;
