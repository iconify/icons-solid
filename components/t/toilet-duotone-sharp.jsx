import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.hz1u_9b7n {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11h16a6 6 0 0 1-6 6v4H9v-4a5 5 0 0 1-5-5Zm0 0V3h6v8");
}

.zw3f55a5x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 12V3h6v8h10a6 6 0 0 1-6 6v4H9v-4a5 5 0 0 1-5-5");
}
</style><g class="ft5dv1b6b"><path class="zw3f55a5x"/><path class="hz1u_9b7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:toilet-duotone-sharp"} {...others} />);
}

export default Component;
