import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-2-i017w {
  cx: 12px;
  cy: 12px;
  r: 2.75px;
}

.fy_zkkblp {
  d: path("M3.25 12a8.75 8.75 0 1 0 2.6-6.2l-2.6 2.7m0-4.75V8.5H8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fy_zkkblp"/><circle class="e-2-i017w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rollback"} {...others} />);
}

export default Component;
