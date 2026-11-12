import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iryhk-bnp {
  d: path("M11 3h10v4H11Zm-8 8h4v10H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wj9xfdcvp {
  stroke-opacity: 0.4;
  d: path("M18 19h-4v-4m0 4l6-6");
}
</style><g class="nrj6p8qat"><path class="wj9xfdcvp"/><path class="iryhk-bnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-transpose-duocolor-sharp"} {...others} />);
}

export default Component;
