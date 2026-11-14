import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.se0wkzb7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 6L12 2.5L16.5 6Zm3 0h3A1.5 1.5 0 0 1 15 7.5v2a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 9.5v-2A1.5 1.5 0 0 1 10.5 6m1.5 5v6.5m-8 2a8 2 0 1 0 16 0a8 2 0 1 0-16 0");
}
</style><path class="se0wkzb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:path-light"} {...others} />);
}

export default Component;
