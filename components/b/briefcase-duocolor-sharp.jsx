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

.u_ijsj09x {
  d: path("M3 8h18v12H3Z");
}

.ztt6nrbso {
  stroke-opacity: 0.4;
  d: path("M8 8a4 4 0 1 1 8 0");
}
</style><g class="nrj6p8qat"><path class="ztt6nrbso"/><path class="u_ijsj09x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:briefcase-duocolor-sharp"} {...others} />);
}

export default Component;
