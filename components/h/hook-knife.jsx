import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hokxw86oe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.038 18.487l4.949-4.949a1.75 1.75 0 0 1 2.475 0a1.75 1.75 0 0 1 0 2.475l-4.949 4.949a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475M9.25 12.25C11.5 8.5 14.5 3 18.75 3c2.5 0 3 3 1.25 5.5l-1.25-1c-2 .25-3.75 2.5-7 7.25Z");
}
</style><path class="hokxw86oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hook-knife"} {...others} />);
}

export default Component;
