import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i-pl0zlcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4v16m-3-3l3 3l3-3m4.25-13h6A1.25 1.25 0 0 1 21 5.25a1.25 1.25 0 0 1-1.25 1.25h-6a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 13.75 4m0 6.75h3.5A1.25 1.25 0 0 1 18.5 12a1.25 1.25 0 0 1-1.25 1.25h-3.5A1.25 1.25 0 0 1 12.5 12a1.25 1.25 0 0 1 1.25-1.25m0 6.75h1A1.25 1.25 0 0 1 16 18.75A1.25 1.25 0 0 1 14.75 20h-1a1.25 1.25 0 0 1-1.25-1.25a1.25 1.25 0 0 1 1.25-1.25");
}
</style><path class="i-pl0zlcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sort-amount-down"} {...others} />);
}

export default Component;
