import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j89km0bss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20C3 10 6.5 3 12 3s9 7 9 17h-4.5c0-8-2-12.5-4.5-12.5S7.5 12 7.5 20Zm9-17v4.5m-6.5.25l3.25 3m9.75-3l-3.25 3");
}
</style><path class="j89km0bss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:teeth-arch-upper"} {...others} />);
}

export default Component;
