import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ayrj938-v {
  width: 11px;
  height: 15.25px;
  x: 6.5px;
  y: 6px;
  rx: 4px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.swk726baw {
  d: path("M9.75 2.75h4.5m-2.25 0V6m-2 4.75v6m4-6v6m-4-3h4");
}
</style><g class="hntgybcog"><rect class="ayrj938-v"/><path class="swk726baw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hydrogen-tank"} {...others} />);
}

export default Component;
