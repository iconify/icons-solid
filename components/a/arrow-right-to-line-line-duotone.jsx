import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p2xi9gwtv {
  d: path("M3 12L16 12M11.625 8L16 12L11.625 16");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.tgvfhnabb {
  d: path("M21 4L21 20");
}
</style><g class="hntgybcog"><path class="tgvfhnabb"/><path class="p2xi9gwtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-to-line-line-duotone"} {...others} />);
}

export default Component;
