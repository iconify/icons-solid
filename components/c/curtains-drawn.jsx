import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hmk449bnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19m-18 0h6Q8.5 10 6 12q2 4 2.5 8.5h-5Zm17 0h-6q1 6.5 3.5 8.5q-2 4-2.5 8.5h5ZM12 7v10m-2.5-5h5");
}
</style><path class="hmk449bnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:curtains-drawn"} {...others} />);
}

export default Component;
