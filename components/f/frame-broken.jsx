import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6gs9jbec {
  stroke-linejoin: round;
  d: path("M19 22L19 2");
}

.grmzm4bjt {
  d: path("M14 19L2 19M22 19L18 19");
}

.iauzcee-u {
  stroke-linejoin: round;
  d: path("M22 5H2");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lq_ib790c {
  d: path("M5 10L5 22M5 2L5 6");
}
</style><g class="ipq1z-bjh"><path class="iauzcee-u"/><path class="c6gs9jbec"/><path class="grmzm4bjt"/><path class="lq_ib790c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:frame-broken"} {...others} />);
}

export default Component;
