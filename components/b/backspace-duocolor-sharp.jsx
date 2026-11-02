import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ts76cuplm {
  d: path("m3 12l6-6h12v12H9z");
}

.yagfc6xce {
  stroke-opacity: 0.4;
  d: path("m13 10l4 4m0-4l-4 4");
}
</style><g class="nrj6p8qat"><path class="yagfc6xce"/><path class="ts76cuplm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:backspace-duocolor-sharp"} {...others} />);
}

export default Component;
