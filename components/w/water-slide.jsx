import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ltqh6fl8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21V6M7 21V6m-3.5 4H7m-3.5 4H7m0-8h1.5c4.5 0 4 9 9.5 9h3.5M10 20q2.25-1.5 4.75 0q2.25 1.5 4.75 0");
}
</style><path class="ltqh6fl8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:water-slide"} {...others} />);
}

export default Component;
