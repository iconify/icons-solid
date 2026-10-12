import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-2-i017w {
  cx: 12px;
  cy: 12px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvabpdbaa {
  d: path("M8 7.5a6.5 6.5 0 0 0 0 9m8-9a6.5 6.5 0 0 1 0 9M6.25 4.75a10 10 0 0 0 0 14.5m11.5-14.5a10 10 0 0 1 0 14.5");
}
</style><g class="hntgybcog"><circle class="e-2-i017w"/><path class="uvabpdbaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wake-word"} {...others} />);
}

export default Component;
