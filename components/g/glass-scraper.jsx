import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ypek8vbno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.475 3.161l6.364 6.364a1.5 1.5 0 0 1 0 2.121l-.707.708a1.5 1.5 0 0 1-2.122 0L11.646 5.99a1.5 1.5 0 0 1 0-2.122l.708-.707a1.5 1.5 0 0 1 2.121 0m.353 6.011l-1.944 1.944m0 0za1.5 1.5 0 0 1 0 2.121l-6.187 6.188a1.5 1.5 0 0 1-2.122 0a1.5 1.5 0 0 1 0-2.122l6.188-6.187a1.5 1.5 0 0 1 2.121 0");
}
</style><path class="ypek8vbno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:glass-scraper"} {...others} />);
}

export default Component;
