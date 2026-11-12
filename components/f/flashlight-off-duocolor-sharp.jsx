import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bd69zj4mw {
  stroke-opacity: 0.4;
  d: path("m9 9l6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x26pvfbkp {
  d: path("m12 6l6 6l-4 4h-3l-5 5l-3-3l5-5v-3z");
}
</style><g class="nrj6p8qat"><path class="bd69zj4mw"/><path class="x26pvfbkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flashlight-off-duocolor-sharp"} {...others} />);
}

export default Component;
