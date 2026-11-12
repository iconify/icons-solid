import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e4-xs6b1o {
  d: path("M3 3h4v4H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zgt00bc2e {
  stroke-opacity: 0.4;
  d: path("m10 10l11 4l-5 2l-2 5z");
}
</style><g class="nrj6p8qat"><path class="zgt00bc2e"/><path class="e4-xs6b1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cursor-square-duocolor-sharp"} {...others} />);
}

export default Component;
