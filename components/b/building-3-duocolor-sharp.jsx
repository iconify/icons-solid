import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h-x39pbqw {
  d: path("M3 20h18M5 20v-6l5-5l5 5v6");
}

.h5i3gtcmr {
  stroke-opacity: 0.4;
  d: path("M7 12V4h12v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="h5i3gtcmr"/><path class="h-x39pbqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-3-duocolor-sharp"} {...others} />);
}

export default Component;
