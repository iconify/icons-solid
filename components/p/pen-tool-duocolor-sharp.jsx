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

.og3vf3u0p {
  stroke-opacity: 0.4;
  d: path("m4 4l4 4m3 3h.01");
}

.wbl-5ymyb {
  d: path("m4 4l10 3l3 6l-4 4l-6-3Zm13 9l3 3l-4 4l-3-3");
}
</style><g class="nrj6p8qat"><path class="og3vf3u0p"/><path class="wbl-5ymyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pen-tool-duocolor-sharp"} {...others} />);
}

export default Component;
