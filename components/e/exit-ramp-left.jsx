import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzryzxb-d {
  d: path("M17.5 2.5v19m0-4c0-4-2.5-5.5-5-8L6 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pf5k29b9w {
  d: path("M6 8.5V3h5.5");
}
</style><g class="hntgybcog"><path class="fzryzxb-d"/><path class="pf5k29b9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:exit-ramp-left"} {...others} />);
}

export default Component;
