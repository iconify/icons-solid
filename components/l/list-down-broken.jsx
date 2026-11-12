import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pre11cbbs {
  d: path("M3 6L13.5 6M17.75 6L20 6");
}

.qtz6yi5yq {
  d: path("M20 10L9.5 10M5.25 10H3");
}

.s5xpay_7j {
  d: path("M10 18H3");
}

.tonplxqkt {
  stroke-linejoin: round;
  d: path("M14 15L17.5 18L21 15");
}

.v3bnzubkl {
  d: path("M10 14H3");
}
</style><g class="ipq1z-bjh"><path class="v3bnzubkl"/><path class="s5xpay_7j"/><path class="tonplxqkt"/><path class="pre11cbbs"/><path class="qtz6yi5yq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-down-broken"} {...others} />);
}

export default Component;
