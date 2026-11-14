import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b65qe80wr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21V6M7 21V6m-3.5 4H7m-3.5 4H7m0-8h1.5c4.5 0 4 9 9.5 9h3.5M10 20q2.25-1.5 4.75 0q2.25 1.5 4.75 0");
}
</style><path class="b65qe80wr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:water-slide"} {...others} />);
}

export default Component;
