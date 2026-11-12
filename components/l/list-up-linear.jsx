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

.jv514ss1m {
  d: path("M21 6L3 6");
}

.qesyv5buv {
  d: path("M11 14L3 14");
}

.rbjrgob2r {
  d: path("M21 10L3 10");
}

.utbx9q75k {
  stroke-linejoin: round;
  d: path("M14 18L17.5 15L21 18");
}
</style><g class="ipq1z-bjh"><path class="utbx9q75k"/><path class="jv514ss1m"/><path class="rbjrgob2r"/><path class="qesyv5buv"/><path class="djbi_ub-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-up-linear"} {...others} />);
}

export default Component;
