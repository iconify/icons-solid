import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e0f4dvbbo {
  stroke-opacity: 0.4;
  d: path("M17 6V4H3v12h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v0e0kyiwn {
  d: path("M15 10h6v10h-6Z");
}
</style><g class="nrj6p8qat"><path class="e0f4dvbbo"/><path class="v0e0kyiwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:devices-duocolor-sharp"} {...others} />);
}

export default Component;
