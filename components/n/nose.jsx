import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i-xzzxb0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 3c0 5-1.5 8-3.5 10.5c-1.5 2-1 5 1.5 5c1 0 1.75 1 3.5 1s2.5-1 3.5-1c2.5 0 3-3 1.5-5C15 11 13.5 8 13.5 3");
}
</style><path class="i-xzzxb0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:nose"} {...others} />);
}

export default Component;
