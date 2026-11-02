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

.qk302m6ft {
  d: path("M12 3h4l5 5v8l-5 5H8l-5-5V8l5-5z");
}

.zjdyf7-3d {
  stroke-opacity: 0.4;
  d: path("M8 12h8m-4-4v8");
}
</style><g class="nrj6p8qat"><path class="zjdyf7-3d"/><path class="qk302m6ft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:octagon-plus-duocolor-sharp"} {...others} />);
}

export default Component;
