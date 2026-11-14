import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h546urbjc {
  d: path("M7.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 3l-1 4.5m-3 3.5l3-3.5l2.5 3.5M6.5 9l2.75-1L12 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l7jmqhbnl {
  d: path("M2.5 18.5h14l3-10.5h-3");
}
</style><g class="hntgybcog"><path class="h546urbjc"/><path class="l7jmqhbnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:stress-test"} {...others} />);
}

export default Component;
