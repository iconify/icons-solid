import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhgqn2bmk {
  cx: 16.25px;
  cy: 14.5px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l3602nbsq {
  d: path("M4.75 21.25a2 2 0 0 1-2-2V12c0-4.5 4.15-8 9.25-8s9.25 3.5 9.25 8v7.25a2 2 0 0 1-2 2Zm2-8.75v5.25M9.25 11v6.75m2.5-6.75v6.75");
}
</style><g class="hntgybcog"><path class="l3602nbsq"/><circle class="fhgqn2bmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:radio-retro"} {...others} />);
}

export default Component;
