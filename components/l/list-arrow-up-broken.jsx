import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.djbi_ub-i {
  d: path("M11 18H3");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.op1q6lnqg {
  stroke-linejoin: round;
  d: path("M15 16.5L17.5 14L20 16.5M17.5 14V20");
}

.pre11cbbs {
  d: path("M3 6L13.5 6M17.75 6L20 6");
}

.qesyv5buv {
  d: path("M11 14L3 14");
}

.qtz6yi5yq {
  d: path("M20 10L9.5 10M5.25 10H3");
}
</style><g class="ipq1z-bjh"><path class="qesyv5buv"/><path class="djbi_ub-i"/><path class="op1q6lnqg"/><path class="pre11cbbs"/><path class="qtz6yi5yq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-arrow-up-broken"} {...others} />);
}

export default Component;
