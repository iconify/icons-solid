import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.npsmtdbwc {
  stroke-opacity: 0.4;
  d: path("M5 12V4h4v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oq9txocbr {
  d: path("M3 12h18M5 12v6h14v-6M8 18v2m8-2v2");
}
</style><g class="nrj6p8qat"><path class="npsmtdbwc"/><path class="oq9txocbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bath-duocolor-sharp"} {...others} />);
}

export default Component;
