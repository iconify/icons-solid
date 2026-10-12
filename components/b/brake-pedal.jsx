import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a7x_r19cg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 18.5V14h1.9a1.12 1.12 0 0 1 0 2.25h-1.9h2.4a1.12 1.12 0 0 1 0 2.25Z");
}

.bfg3ugh3t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.5 4h.01");
}

.jvsacfb2e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16 5.25l-2.5 6.25");
}

.qfs5l13lp {
  width: 18.5px;
  height: 9.5px;
  x: 2.75px;
  y: 11.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="bfg3ugh3t"/><path class="jvsacfb2e"/><rect class="qfs5l13lp"/><path class="a7x_r19cg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:brake-pedal"} {...others} />);
}

export default Component;
