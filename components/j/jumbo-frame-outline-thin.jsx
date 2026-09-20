import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aalbzcb_j {
  d: path("M2 5.5h20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oh4p-ccfe {
  d: path("M2 10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.t8z7o_gvd {
  d: path("M22 4v3");
}

.vh0_rdbqi {
  d: path("M2 4v3");
}

.vslz5yb3q {
  d: path("M6 12h12");
}
</style><g class="hntgybcog"><path class="oh4p-ccfe"/><path class="vh0_rdbqi"/><path class="t8z7o_gvd"/><path class="aalbzcb_j"/><path class="vslz5yb3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:jumbo-frame-outline-thin"} {...others} />);
}

export default Component;
