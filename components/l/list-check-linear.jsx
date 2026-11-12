import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jv514ss1m {
  d: path("M21 6L3 6");
}

.mlaq8tbmp {
  stroke-linejoin: round;
  d: path("M14 16L16.1 18.5L20 13.5");
}

.rbjrgob2r {
  d: path("M21 10L3 10");
}

.s5xpay_7j {
  d: path("M10 18H3");
}

.v3bnzubkl {
  d: path("M10 14H3");
}
</style><g class="ipq1z-bjh"><path class="mlaq8tbmp"/><path class="jv514ss1m"/><path class="rbjrgob2r"/><path class="v3bnzubkl"/><path class="s5xpay_7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-check-linear"} {...others} />);
}

export default Component;
