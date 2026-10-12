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

.uhwk2grtx {
  width: 12.5px;
  height: 12.5px;
  x: 2.75px;
  y: 6px;
  rx: 2.5px;
}

.yo0f25b1l {
  d: path("M6 9.25v6m3-6v6m3-6v6m3.25-6l5.5-5.5");
}
</style><g class="hntgybcog"><rect class="uhwk2grtx"/><path class="yo0f25b1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:grill-pan"} {...others} />);
}

export default Component;
