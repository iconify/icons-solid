import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.o71inub6l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 11V3l8 4zm0 0v6m-4 2c0 1.105 1.79 2 4 2s4-.895 4-2");
}

.w-nec0saa {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18.447 6.106a.998.998 0 0 1 0 1.788l-8 4A1 1 0 0 1 9 11V3a1 1 0 0 1 1.447-.894Z");
}
</style><g class="ft5dv1b6b"><path class="w-nec0saa"/><path class="o71inub6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:golf-duotone-sharp"} {...others} />);
}

export default Component;
