import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}

.z6fvuzbrz {
  d: path("M6.5 17.5C9 10 11 8 14 7.5c2-.25 3.5.5 5.5 2m0 0h.01");
}
</style><g class="hntgybcog"><path class="p8u760b4u"/><path class="z6fvuzbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:stress-strain"} {...others} />);
}

export default Component;
