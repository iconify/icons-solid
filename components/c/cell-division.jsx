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

.m1is5jemp {
  cx: 7.75px;
  cy: 12px;
  r: 2px;
}

.nq__ccb6w {
  d: path("M12 9.37a5 5 0 1 0 0 5.26a5 5 0 1 0 0-5.26");
}

.x45ounoqa {
  cx: 16.25px;
  cy: 12px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="nq__ccb6w"/><circle class="m1is5jemp"/><circle class="x45ounoqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cell-division"} {...others} />);
}

export default Component;
