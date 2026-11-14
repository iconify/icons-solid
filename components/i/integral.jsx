import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rb95sccol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 4.5c-.75-.75-1.75-1-2.5-.75c-1.1.35-1.6 1.25-1.75 2.5l-1.5 11.5c-.15 1.25-.65 2.15-1.75 2.5c-.75.25-1.75 0-2.5-.75");
}
</style><path class="rb95sccol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:integral"} {...others} />);
}

export default Component;
