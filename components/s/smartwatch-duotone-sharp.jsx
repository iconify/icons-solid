import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4h3s8qno {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6h12v12H6Zm3 0V3h6v3M9 18v3h6v-3");
}

.ft5dv1b6b {
  fill: none;
}

.jd4-llbsy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 6h12v12H6Z");
}
</style><g class="ft5dv1b6b"><path class="jd4-llbsy"/><path class="a4h3s8qno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:smartwatch-duotone-sharp"} {...others} />);
}

export default Component;
