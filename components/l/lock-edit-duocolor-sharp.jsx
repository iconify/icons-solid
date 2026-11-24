import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kskc15b9j {
  d: path("M4 9h16v12H4Zm4 0V7a4 4 0 1 1 8 0v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p6d3pppgq {
  stroke-opacity: 0.4;
  d: path("M9 18v-2l4-4l2 2l-4 4Z");
}
</style><g class="nrj6p8qat"><path class="p6d3pppgq"/><path class="kskc15b9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-edit-duocolor-sharp"} {...others} />);
}

export default Component;
