import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eoblojbgg {
  d: path("M4 21V8l6-3h4l6 3v13z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wg4if2bmf {
  stroke-opacity: 0.4;
  d: path("M8 21v-9h8v9m-8-5h8");
}
</style><g class="nrj6p8qat"><path class="wg4if2bmf"/><path class="eoblojbgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:warehouse-duocolor-sharp"} {...others} />);
}

export default Component;
