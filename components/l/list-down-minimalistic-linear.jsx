import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nmhvanepw {
  d: path("M20 11L3 11");
}

.pqx2-oyar {
  d: path("M10 16H3");
}

.tonplxqkt {
  stroke-linejoin: round;
  d: path("M14 15L17.5 18L21 15");
}

.xa_506f5h {
  d: path("M20 6L3 6");
}
</style><g class="ipq1z-bjh"><path class="xa_506f5h"/><path class="nmhvanepw"/><path class="pqx2-oyar"/><path class="tonplxqkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-down-minimalistic-linear"} {...others} />);
}

export default Component;
