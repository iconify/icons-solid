import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g5s6ahb7t {
  d: path("M8 21H4V10l8-7l5.714 5");
}

.g9-g9zb0l {
  stroke-opacity: 0.4;
  d: path("m19 13l-4 4h5l-4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="g9-g9zb0l"/><path class="g5s6ahb7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-zap-corner-duocolor-sharp"} {...others} />);
}

export default Component;
