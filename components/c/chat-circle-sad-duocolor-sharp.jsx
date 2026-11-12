import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n5iafhovj {
  d: path("M4 16a8.944 8.944 0 1 1 4 4l-5 1Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xrsg-3hzq {
  stroke-opacity: 0.4;
  d: path("M9 9h.01M15 9h.01M8 15a5.657 5.657 0 0 1 8 0");
}
</style><g class="nrj6p8qat"><path class="xrsg-3hzq"/><path class="n5iafhovj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-circle-sad-duocolor-sharp"} {...others} />);
}

export default Component;
