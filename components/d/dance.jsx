import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9xqa_ico {
  cx: 14px;
  cy: 4.75px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hw49njbjl {
  d: path("M13 7.5L11.5 13m1-4.25L9 7L7 3.25m5.5 5.5l3.75 1.75L19 8.75M11.5 13l4 2.5l-.75 5.75M11.5 13l-4.25 2.5l-2 3.25");
}
</style><g class="hntgybcog"><circle class="e9xqa_ico"/><path class="hw49njbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dance"} {...others} />);
}

export default Component;
