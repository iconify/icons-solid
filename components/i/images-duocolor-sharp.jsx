import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ld9kxtbyj {
  d: path("M7 3h14v14M3 7h14v14H3Z");
}

.m2wr4nbeh {
  stroke-opacity: 0.4;
  d: path("m3 17l5-5l4 4l2-2l3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="m2wr4nbeh"/><path class="ld9kxtbyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:images-duocolor-sharp"} {...others} />);
}

export default Component;
