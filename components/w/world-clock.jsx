import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eseyp7btj {
  d: path("M15.5 12.5v3l-2 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mdswc-b6o {
  cx: 9px;
  cy: 9px;
  r: 6.25px;
}

.req4htxyv {
  cx: 15.5px;
  cy: 15.5px;
  r: 5.75px;
}

.yj4rhqsqh {
  d: path("M9 5.5V9h2.5");
}
</style><g class="hntgybcog"><circle class="mdswc-b6o"/><path class="yj4rhqsqh"/><circle class="req4htxyv"/><path class="eseyp7btj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:world-clock"} {...others} />);
}

export default Component;
