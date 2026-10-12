import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.drbi0rnnl {
  d: path("M3.75 12a8.25 8.25 0 1 0 2.42-5.83L3.75 8.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rjtfrzb-f {
  d: path("M3.75 3.75v4.5h4.5");
}
</style><g class="hntgybcog"><path class="drbi0rnnl"/><path class="rjtfrzb-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rotate-square-ccw"} {...others} />);
}

export default Component;
