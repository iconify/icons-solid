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

.jyorf1hii {
  d: path("M6.5 4h11A3.5 3.5 0 0 1 21 7.5v10a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-10A3.5 3.5 0 0 1 6.5 4M8 2.5V6m8-3.5V6M3 9h18");
}

.pk6p7lhvt {
  d: path("M13.25 13.25a1.4 1.4 0 0 1 1 2.5a1.4 1.4 0 0 1-2.25 1.5a1.4 1.4 0 0 1-2.25-1.5a1.4 1.4 0 0 1 1-2.5a1.4 1.4 0 0 1 2.5 0M12 15h.01");
}
</style><g class="hntgybcog"><path class="jyorf1hii"/><path class="pk6p7lhvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:spring-calendar"} {...others} />);
}

export default Component;
