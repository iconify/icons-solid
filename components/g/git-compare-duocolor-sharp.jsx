import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.faw_rxanl {
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w52u0skdd {
  stroke-opacity: 0.4;
  d: path("M19 16V6h-8m3-3l-3 3l3 3M5 8v10h8m-3-3l3 3l-3 3");
}
</style><g class="nrj6p8qat"><path class="w52u0skdd"/><path class="faw_rxanl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-compare-duocolor-sharp"} {...others} />);
}

export default Component;
