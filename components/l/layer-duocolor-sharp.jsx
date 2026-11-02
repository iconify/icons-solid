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

.qgm4y23bk {
  stroke-opacity: 0.4;
  d: path("m4 14l8 4l8-4");
}

.tw8j10bcb {
  d: path("m8 8l4-2l8 4l-8 4l-8-4z");
}
</style><g class="nrj6p8qat"><path class="qgm4y23bk"/><path class="tw8j10bcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:layer-duocolor-sharp"} {...others} />);
}

export default Component;
