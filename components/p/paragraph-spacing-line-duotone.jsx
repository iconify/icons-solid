import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ge3dxob1l {
  d: path("M4 3H20");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iim04tfhn {
  d: path("M9 8.5L12 5.5L15 8.5M12 5.5V18.5M9 15.5L12 18.5L15 15.5");
}

.jfkds5tvp {
  d: path("M4 21H20");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="jfkds5tvp"/><path class="ge3dxob1l"/><path class="iim04tfhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paragraph-spacing-line-duotone"} {...others} />);
}

export default Component;
