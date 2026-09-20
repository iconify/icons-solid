import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cqx_5fa1v {
  d: path("M3 21 20 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lgz_om1xp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 4h7v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w8-rvrwyp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 21 20 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y18a3dbyh {
  d: path("M13 4h7v7");
}
</style><g class="hntgybcog"><path class="w8-rvrwyp"/><path class="lgz_om1xp"/><path class="cqx_5fa1v"/><path class="y18a3dbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:vector-duotone-thin"} {...others} />);
}

export default Component;
