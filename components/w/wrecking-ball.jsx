import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.etsfzkb2o {
  width: 8px;
  height: 5px;
  x: 4.25px;
  y: 12.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.i7r3t7ojv {
  width: 11.5px;
  height: 4px;
  x: 2.75px;
  y: 17.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.pv111ubgt {
  cx: 18.5px;
  cy: 14px;
  r: 2.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qdi9wonmu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 12.25l8.5-9.5m0 0v8.75");
}

.s2cyppihi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.25 19.25h.01m6.49 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="i7r3t7ojv"/><rect class="etsfzkb2o"/><path class="qdi9wonmu"/><circle class="pv111ubgt"/><path class="s2cyppihi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wrecking-ball"} {...others} />);
}

export default Component;
