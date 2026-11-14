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

.k_y2xpwaa {
  d: path("M16 5.072a8 8 0 1 1-8 0");
}

.u95zk4bjs {
  d: path("m5.25 4.25l3 .75l-.75 3M9 12h.01M12 12h.01M15 12h.01");
}
</style><g class="hntgybcog"><path class="k_y2xpwaa"/><path class="u95zk4bjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:iterator"} {...others} />);
}

export default Component;
