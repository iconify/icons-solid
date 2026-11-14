import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dwe7e9b_y {
  d: path("M8 3.5h8A3.5 3.5 0 0 1 19.5 7v10a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 17V7A3.5 3.5 0 0 1 8 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o2l9w1_cd {
  d: path("M8 8.5L9.5 10L12 7m-4 7l1.5 1.5l2.5-3M14 9h2m-2 5.5h2");
}
</style><g class="hntgybcog"><path class="dwe7e9b_y"/><path class="o2l9w1_cd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:picking-list"} {...others} />);
}

export default Component;
