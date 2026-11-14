import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.og2a6ab7l {
  d: path("M14.75 16.5q1.625-1.75 3.25 0t3.25 0m-6.5 3.5q1.625-1.75 3.25 0t3.25 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_125ft8x {
  d: path("M3.5 21.5v-19m0 2.5h17m-8.2 13.5H6.5v-11H20v6.3M9 5v2.5M17.5 5v2.5m-8 3.75h7");
}
</style><g class="ulnmmdpxh"><path class="v_125ft8x"/><path class="og2a6ab7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:comparable-sales"} {...others} />);
}

export default Component;
