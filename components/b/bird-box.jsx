import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bh5cnabah {
  d: path("M10 13.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 4.75h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lc--3dbyp {
  d: path("M7 11v10.5h10V11");
}

.pvcr_tbus {
  d: path("M2.5 3h19M12 3v3m-7 7l7-7l7 7");
}
</style><g class="hntgybcog"><path class="pvcr_tbus"/><path class="lc--3dbyp"/><path class="bh5cnabah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bird-box"} {...others} />);
}

export default Component;
