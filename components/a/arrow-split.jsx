import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gtdkf60xt {
  d: path("M4.75 10.5V5.75H9.5m5 0h4.75v4.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8bxj4b5o {
  d: path("M12 21v-8L5 6m7 7l7-7");
}
</style><g class="hntgybcog"><path class="j8bxj4b5o"/><path class="gtdkf60xt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:arrow-split"} {...others} />);
}

export default Component;
