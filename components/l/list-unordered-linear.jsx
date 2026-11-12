import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.akly-1bxp {
  d: path("M5 6H5.0001");
}

.d_1-t8bqs {
  d: path("M10 14H21");
}

.f1vdtsbwm {
  d: path("M5 14H5.0001");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pkyac1btc {
  d: path("M10 10H21");
}

.r4gkr88fv {
  d: path("M10 18H21");
}

.rxu47eqeo {
  d: path("M10 6H21");
}

.u85h8qb3e {
  d: path("M5 18H5.0001");
}

.vr5gl3zbo {
  d: path("M5 10H5.0001");
}
</style><g class="hntgybcog"><path class="rxu47eqeo"/><path class="pkyac1btc"/><path class="d_1-t8bqs"/><path class="r4gkr88fv"/><path class="akly-1bxp"/><path class="vr5gl3zbo"/><path class="f1vdtsbwm"/><path class="u85h8qb3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-unordered-linear"} {...others} />);
}

export default Component;
