import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.drtvz1btn {
  cx: 12px;
  cy: 8.5px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oi0ow30pa {
  cx: 18.25px;
  cy: 15.5px;
  r: 2.25px;
}

.u0w4h7bml {
  cx: 5.75px;
  cy: 14.5px;
  r: 2.25px;
}

.v2hfjpb3b {
  d: path("M5.75 3.75v8.5m0 4.5v3.5M12 3.75v2.5m0 4.5v9.5m6.25-16.5v9.5m0 4.5v2.5");
}
</style><g class="hntgybcog"><path class="v2hfjpb3b"/><circle class="u0w4h7bml"/><circle class="drtvz1btn"/><circle class="oi0ow30pa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:equalizer"} {...others} />);
}

export default Component;
