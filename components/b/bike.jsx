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

.msgwke1if {
  d: path("m6.25 16l4.25-7l2 7h5.25M10.5 9l-.75-2.5m-1.5 0h3m6.5 9.5L15.5 8.5H18");
}

.p4j5t3rkc {
  d: path("M6.25 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m11.5 0a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7");
}
</style><g class="hntgybcog"><path class="p4j5t3rkc"/><path class="msgwke1if"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bike"} {...others} />);
}

export default Component;
