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

.k0v1t97jg {
  d: path("M3 21.5V11a9 9 0 0 1 18 0v10.5");
}

.n_wsqz5bh {
  d: path("M6 13.5q1.5-1.5 3 0t3 0t3 0t3 0m-12 5q1.5-1.5 3 0t3 0t3 0t3 0");
}
</style><g class="hntgybcog"><path class="k0v1t97jg"/><path class="n_wsqz5bh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mine-flooding"} {...others} />);
}

export default Component;
