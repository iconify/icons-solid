import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e2tshtb1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 20.5c1.5-3.5 2.25-5 3-8C10.5 6 14 3 17.5 3c2.75 0 4.25 2 3.5 4.5c-.75 2.25-4 2.25-4.75 0M2.5 20.5h19");
}
</style><path class="e2tshtb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tide-high"} {...others} />);
}

export default Component;
