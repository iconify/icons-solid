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

.mku7sgbuc {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v7a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 14V7A3.5 3.5 0 0 1 6 3.5M8.5 21h7");
}

.rkojmkb-x {
  d: path("M8.5 10.5L11 13l4.5-4.5");
}
</style><g class="hntgybcog"><path class="mku7sgbuc"/><path class="rkojmkb-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:election-coverage"} {...others} />);
}

export default Component;
