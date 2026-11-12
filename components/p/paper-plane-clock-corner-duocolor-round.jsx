import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ag8_16a4o {
  stroke-opacity: 0.4;
  d: path("m7 8l1-1m4 10a5 5 0 1 0 10 0a5 5 0 0 0-10 0m5-2v2h2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vp370bb3t {
  d: path("M9 4L3 6l4 2l2 4l3-9z");
}
</style><g class="nrj6p8qat"><path class="ag8_16a4o"/><path class="vp370bb3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paper-plane-clock-corner-duocolor-round"} {...others} />);
}

export default Component;
