import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.axcf-wb4p {
  stroke-opacity: 0.4;
  d: path("m2 2l20 20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vkrj_abij {
  d: path("M8 8H6v8h4l4 4v-6m0-6V4l-2 2");
}
</style><g class="nrj6p8qat"><path class="axcf-wb4p"/><path class="vkrj_abij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:volume-off-duocolor-sharp"} {...others} />);
}

export default Component;
