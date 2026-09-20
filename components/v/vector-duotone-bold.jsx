import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cqx_5fa1v {
  d: path("M3 21 20 4");
}

.ihyvscpag {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 21 20 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pkomvsbso {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 4h7v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y18a3dbyh {
  d: path("M13 4h7v7");
}
</style><g class="s0phu2bbs"><path class="ihyvscpag"/><path class="pkomvsbso"/><path class="cqx_5fa1v"/><path class="y18a3dbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:vector-duotone-bold"} {...others} />);
}

export default Component;
