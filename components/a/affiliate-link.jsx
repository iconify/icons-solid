import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fs3jhybjb {
  cx: 12px;
  cy: 6.75px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mrbssfbyi {
  d: path("M9.25 13.25h-3a2.75 2.75 0 0 0 0 5.5h3m5.5-5.5h3a2.75 2.75 0 0 1 0 5.5h-3M9 16h6");
}

.mx0ir3bdi {
  cx: 12px;
  cy: 6.75px;
  r: 4px;
}
</style><g class="hntgybcog"><circle class="mx0ir3bdi"/><circle class="fs3jhybjb"/><path class="mrbssfbyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:affiliate-link"} {...others} />);
}

export default Component;
