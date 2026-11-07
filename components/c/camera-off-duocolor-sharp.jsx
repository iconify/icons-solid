import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bge3twbbj {
  d: path("M19 20H3V7h3m4-3zh4l3 3h4v9");
}

.iv4xs0jzj {
  stroke-opacity: 0.4;
  d: path("M9.879 10.879a3 3 0 0 0 4.243 4.243M2 3l19 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="iv4xs0jzj"/><path class="bge3twbbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:camera-off-duocolor-sharp"} {...others} />);
}

export default Component;
