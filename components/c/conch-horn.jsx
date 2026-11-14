import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cqq98kbdh {
  d: path("M14 10a4 4 0 1 1-3.75 5.5M7.5 5.5l-3 4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tsi0pcbrz {
  d: path("M4.5 4.5L12.75 7A7 7 0 1 1 7 15.25L3 6.5Z");
}
</style><g class="hntgybcog"><path class="tsi0pcbrz"/><path class="cqq98kbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:conch-horn"} {...others} />);
}

export default Component;
