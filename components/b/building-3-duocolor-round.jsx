import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fo6fxlbuf {
  d: path("M3 20h18M5 20v-5.078A4 4 0 0 1 6.501 11.8l1-.8a4 4 0 0 1 4.998 0l1 .8A4 4 0 0 1 15 14.923V20");
}

.i5qu0pbfb {
  stroke-opacity: 0.4;
  d: path("M7 11.4V4h8a4 4 0 0 1 4 4v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="i5qu0pbfb"/><path class="fo6fxlbuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-3-duocolor-round"} {...others} />);
}

export default Component;
