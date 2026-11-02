import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ewzx-mbdk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 4v16l-4-4H3V8h4zm4 4a7.21 7.21 0 0 1 0 8");
}

.ft5dv1b6b {
  fill: none;
}

.iiqqoq0_z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m11 20l-4-4H3V8h4l4-4Z");
}
</style><g class="ft5dv1b6b"><path class="iiqqoq0_z"/><path class="ewzx-mbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:volume-low-duotone-sharp"} {...others} />);
}

export default Component;
