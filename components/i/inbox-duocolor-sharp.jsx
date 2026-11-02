import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tsi_y2btm {
  stroke-opacity: 0.4;
  d: path("M3 13h4l3 3h4l3-3h4");
}

.w7mc2oblu {
  d: path("M3 4h18v16H3Z");
}
</style><g class="nrj6p8qat"><path class="tsi_y2btm"/><path class="w7mc2oblu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:inbox-duocolor-sharp"} {...others} />);
}

export default Component;
