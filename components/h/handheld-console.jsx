import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eumdm_bac {
  width: 9px;
  height: 6.25px;
  x: 7.5px;
  y: 5.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.plw7pgrcz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 15.75h3m-1.5-1.5v3");
}

.wxw3awbew {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 16.75h.01m2.24-2h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.y9ylp9b2p {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.75h10a2 2 0 0 1 2 2v12.5a4 4 0 0 1-4 4H7a2 2 0 0 1-2-2V4.75a2 2 0 0 1 2-2");
}
</style><g class="y9tr6bcfx"><path class="y9ylp9b2p"/><rect class="eumdm_bac"/><path class="plw7pgrcz"/><path class="wxw3awbew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:handheld-console"} {...others} />);
}

export default Component;
