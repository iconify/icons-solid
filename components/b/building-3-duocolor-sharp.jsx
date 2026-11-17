import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.npsy_-bll {
  d: path("M3 20h18M5 20v-7l5-4l5 4v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qzfq6dbor {
  stroke-opacity: 0.4;
  d: path("M7 11.4V4h12v16");
}
</style><g class="nrj6p8qat"><path class="qzfq6dbor"/><path class="npsy_-bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-3-duocolor-sharp"} {...others} />);
}

export default Component;
