import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ekxv2q3-d {
  d: path("M6 6h12v12H6Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.onadeachb {
  stroke-opacity: 0.4;
  d: path("M9 6V3h6v3M9 18v3h6v-3");
}
</style><g class="nrj6p8qat"><path class="onadeachb"/><path class="ekxv2q3-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:smartwatch-duocolor-sharp"} {...others} />);
}

export default Component;
