import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bzf0gabci {
  d: path("M5 7.75V16a2.75 2.75 0 0 0 2.75 2.75h3.5M5 9.25A2.75 2.75 0 0 0 7.75 12h3.5m-1-6.75h10m-6 6.75h6m-6 6.75h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r9rp8qjbt {
  cx: 5px;
  cy: 5.25px;
  r: 1.75px;
}
</style><g class="hntgybcog"><circle class="r9rp8qjbt"/><path class="bzf0gabci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:list-tree"} {...others} />);
}

export default Component;
