import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d7h7k6b1f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 13.25h.01");
}

.f0ob_2b3h {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.xwaolccwr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.5h18.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zjsvsnq6j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 13.25h6.25m-11 3.5h11.5");
}
</style><g class="y9tr6bcfx"><rect class="f0ob_2b3h"/><path class="xwaolccwr"/><path class="d7h7k6b1f"/><path class="zjsvsnq6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wall-planner"} {...others} />);
}

export default Component;
