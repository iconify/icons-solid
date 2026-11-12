import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnxjytb-q {
  stroke-opacity: 0.4;
  d: path("M10 14v-3l5-5l3 3l-5 5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v0-jn0bvp {
  d: path("M3 3h18v18H3Zm0 14l2-2l6 6");
}
</style><g class="nrj6p8qat"><path class="fnxjytb-q"/><path class="v0-jn0bvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:image-edit-duocolor-sharp"} {...others} />);
}

export default Component;
