import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cthp1cb5p {
  d: path("M12 6c2.75 2.5 4.25 4.75 4.25 7.25a4.25 4.25 0 0 1-8.5 0c0-1.75.75-3 2-4.25c.25 1.5.75 2.25 1.75 2.5c0-2.25.25-4 .5-5.5m-6.5-.5l13 13");
}

.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="cthp1cb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:no-fire"} {...others} />);
}

export default Component;
