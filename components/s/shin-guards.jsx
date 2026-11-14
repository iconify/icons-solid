import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lnnmlab-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5q3-2.5 6 0l-.75 10q1.25 2.5.5 5.5h-5.5q-.75-3 .5-5.5Zm10 0q3-2.5 6 0l-.75 10q1.25 2.5.5 5.5h-5.5q-.75-3 .5-5.5Z");
}
</style><path class="lnnmlab-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:shin-guards"} {...others} />);
}

export default Component;
