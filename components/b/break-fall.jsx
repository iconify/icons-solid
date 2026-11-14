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

.jk4ekm57j {
  d: path("m16.5 10l2.5 2.5l2.5-2.5M4.75 16h14.5A1.75 1.75 0 0 1 21 17.75a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 17.75A1.75 1.75 0 0 1 4.75 16");
}

.qdzqazyhg {
  d: path("M5 12.5a7 7 0 0 1 14 0");
}
</style><g class="hntgybcog"><path class="qdzqazyhg"/><path class="jk4ekm57j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:break-fall"} {...others} />);
}

export default Component;
