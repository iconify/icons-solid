import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hrb3s1frp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 5h6.5l.7 1.87l3.85 10.26l.7 1.87h-19l.7-1.87L7.05 6.87L7.75 5z");
}

.rjt4yjb1k {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 13h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="hrb3s1frp"/><path class="rjt4yjb1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:trapezoid-right-sharp"} {...others} />);
}

export default Component;
