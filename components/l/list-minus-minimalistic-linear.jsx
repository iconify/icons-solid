import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8edcu39k {
  d: path("M11 16H3");
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

.r5wb7_bnz {
  d: path("M21 11L3 11");
}

.y_nlv-nqo {
  d: path("M21 18H14");
}
</style><g class="ipq1z-bjh"><path class="jv514ss1m"/><path class="r5wb7_bnz"/><path class="f8edcu39k"/><path class="y_nlv-nqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-minus-minimalistic-linear"} {...others} />);
}

export default Component;
