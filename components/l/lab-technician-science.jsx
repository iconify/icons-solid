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

.o2ir4q-cl {
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-4 15v-3c0-3 3-5 7.5-5s7.5 2 7.5 5v3");
}

.y2ljvhbnj {
  d: path("M9.25 14L12 18.5l2.75-4.5M12 18.5v3");
}
</style><g class="hntgybcog"><path class="o2ir4q-cl"/><path class="y2ljvhbnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lab-technician-science"} {...others} />);
}

export default Component;
