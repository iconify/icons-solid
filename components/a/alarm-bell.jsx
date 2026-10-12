import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cryk9-b_j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 14.25v3");
}

.dkbmbac1m {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.47 13.87a6.75 6.75 0 0 1 0-7.74m-2.05 9.18a9.25 9.25 0 0 1 0-10.62m13.11 1.44a6.75 6.75 0 0 1 0 7.74m2.05-9.18a9.25 9.25 0 0 1 0 10.62");
}

.qcz3cfb1g {
  cx: 12px;
  cy: 10px;
  r: 4.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wcpvigl8r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10h.01");
}

.wsh-k97qh {
  width: 6.5px;
  height: 4px;
  x: 8.75px;
  y: 17.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.25px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="qcz3cfb1g"/><path class="wcpvigl8r"/><path class="cryk9-b_j"/><rect class="wsh-k97qh"/><path class="dkbmbac1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:alarm-bell"} {...others} />);
}

export default Component;
