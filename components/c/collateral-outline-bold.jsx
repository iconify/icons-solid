import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6e_o0bju {
  d: path("m3 11 9 -9 9 9");
}

.asjt_p6in {
  d: path("M10.5 15a1.5 1.5 0 0 1 3 0");
}

.cf2pd_8sh {
  d: path("M9 15h6v3H9Z");
}

.dvfmj91gv {
  d: path("M6 11v10h12V11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="a6e_o0bju"/><path class="dvfmj91gv"/><path class="cf2pd_8sh"/><path class="asjt_p6in"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:collateral-outline-bold"} {...others} />);
}

export default Component;
