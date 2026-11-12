import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ahe6xhbjr {
  d: path("M2.81836 8.03255C4.354 4.48336 7.8872 2 12.0004 2C12.6864 2 13.3562 2.06906 14.0033 2.20061");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pzchgt01j {
  d: path("M2 12C2 17.5229 6.47715 22 12 22C17.5228 22 22 17.5229 22 12C22 11.3187 21.9319 10.6533 21.802 10.0102");
}
</style><g class="ipq1z-bjh"><path class="pzchgt01j"/><path class="ahe6xhbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:loader-broken"} {...others} />);
}

export default Component;
