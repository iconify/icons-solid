import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.as04tqbxk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 19.75a1.5 1.5 0 0 0 1.5 1.5h15.5a1.5 1.5 0 0 0 1.5-1.5V13.5c0 3.5-3.25 4.75-7.25 4.75H4.25a1.5 1.5 0 0 0-1.5 1.5");
}

.f3bj_2blj {
  cx: 9.5px;
  cy: 10.25px;
  r: 4px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.klobb3s5j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.26 11.62l7.99 1.88");
}

.vtty5i1nq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 10.25h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="as04tqbxk"/><circle class="f3bj_2blj"/><path class="vtty5i1nq"/><path class="klobb3s5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tape-dispenser"} {...others} />);
}

export default Component;
