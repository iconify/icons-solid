import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a64x2mpbm {
  d: path("m3.655 17.513l4.875-10.5A1.75 1.75 0 0 1 10.117 6h3.766a1.75 1.75 0 0 1 1.587 1.013l4.875 10.5A1.75 1.75 0 0 1 18.758 20H5.242a1.75 1.75 0 0 1-1.587-2.487");
}

.dqgg4cz2h {
  d: path("M9.5 11.5q1.25-1.25 2.5 0t2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a64x2mpbm"/><path class="dqgg4cz2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:crater-lake"} {...others} />);
}

export default Component;
