import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.beu8enohc {
  d: path("M22 19H2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oqpf2r_po {
  d: path("M5 22L5 2");
}

.raqzb_bqt {
  d: path("M22 5H2");
}

.uzjzslbbw {
  d: path("M19 22L19 2");
}
</style><g class="hntgybcog"><path class="raqzb_bqt"/><path class="beu8enohc"/><path class="uzjzslbbw"/><path class="oqpf2r_po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:frame-linear"} {...others} />);
}

export default Component;
