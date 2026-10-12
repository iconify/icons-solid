import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.har4go24q {
  cx: 12px;
  cy: 18.75px;
  r: 2.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lbknmcbqn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 5.75h11M6.5 8h11M12 11.75v4.5");
}

.npjwj4b2p {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 18.75h.01");
}

.t2b2_1b6m {
  width: 11px;
  height: 9px;
  x: 6.5px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="t2b2_1b6m"/><path class="lbknmcbqn"/><circle class="har4go24q"/><path class="npjwj4b2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:piston"} {...others} />);
}

export default Component;
