import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.be22l-bch {
  d: path("M5.75 21h12.5a.75.75 0 0 0 .75-.75C19 18.4 15.85 17 12 17s-7 1.4-7 3.25a.75.75 0 0 0 .75.75");
}

.bwmi2h6rh {
  width: 7px;
  height: 4.25px;
  x: 8.5px;
  y: 6.25px;
  rx: 2.125px;
}

.dld8vub9v {
  cx: 12px;
  cy: 8.5px;
  r: 5.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="dld8vub9v"/><rect class="bwmi2h6rh"/><path class="be22l-bch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:user-astronaut"} {...others} />);
}

export default Component;
