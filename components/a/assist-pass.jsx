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

.kedl3gynz {
  d: path("M15.75 12.75L18 10.5l2.25 2.25");
}

.qos38c-tb {
  d: path("M2.5 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M16 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-5.75 13.5q7.5 0 7.75-8");
}
</style><g class="hntgybcog"><path class="qos38c-tb"/><path class="kedl3gynz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:assist-pass"} {...others} />);
}

export default Component;
