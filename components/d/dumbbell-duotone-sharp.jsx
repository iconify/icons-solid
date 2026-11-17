import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.i0da4acqv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 5h4v14H5v-3H3V8h2Zm10 0h4v3h2v8h-2v3h-4Z");
}

.t_c5-vm7q {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 5h4v14H5Zm10 0h4v14h-4ZM5 8H3v8h2m14-8h2v8h-2M9 12h6");
}
</style><g class="ft5dv1b6b"><path class="i0da4acqv"/><path class="t_c5-vm7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dumbbell-duotone-sharp"} {...others} />);
}

export default Component;
