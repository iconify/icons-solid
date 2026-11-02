import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gt5p92bmk {
  d: path("M3 17L17 3M7 21L21 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wglsxvt_i {
  stroke-opacity: 0.4;
  d: path("m3 13l2 2m0 0l4 4m0 0l2 2M8 8l2 2m0 0l4 4m0 0l2 2M13 3l2 2m0 0l4 4m0 0l2 2");
}
</style><g class="nrj6p8qat"><path class="wglsxvt_i"/><path class="gt5p92bmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:train-track-duocolor"} {...others} />);
}

export default Component;
