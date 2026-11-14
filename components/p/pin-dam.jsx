import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qbyqi0bsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5h3.5l6 16H10Zm-7.5 16h19M2.5 9Q3.75 8 5 9t2.25 0M2.5 13q1.25-1 2.5 0t2.25 0m6.25-8.5q6.5 0 8 7.5");
}
</style><path class="qbyqi0bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-dam"} {...others} />);
}

export default Component;
