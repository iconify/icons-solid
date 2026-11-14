import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gwyuc_nec {
  d: path("M4 18.5V9.306a1.5 1.5 0 0 1 2.488-1.129l10.508 9.194A1.5 1.5 0 0 1 16.008 20H5.5A1.5 1.5 0 0 1 4 18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwthhklrx {
  d: path("M5.5 15.5H7A1.5 1.5 0 0 1 8.5 17v1.5A1.5 1.5 0 0 1 7 20H5.5A1.5 1.5 0 0 1 4 18.5V17a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="gwyuc_nec"/><path class="wwthhklrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pythagorean-theorem"} {...others} />);
}

export default Component;
