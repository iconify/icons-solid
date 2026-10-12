import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cha8ab5ul {
  cx: 6.75px;
  cy: 7px;
  r: 1.75px;
}

.d6uzu6bvc {
  cx: 17px;
  cy: 16.5px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.huvaqvy6k {
  d: path("M12 2.75v18.5M2.75 12h18.5");
}

.i-842mbep {
  cx: 16.75px;
  cy: 7.25px;
  r: 2.25px;
}

.qxh4jaczc {
  cx: 7.25px;
  cy: 16.75px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="huvaqvy6k"/><circle class="cha8ab5ul"/><circle class="i-842mbep"/><circle class="qxh4jaczc"/><circle class="d6uzu6bvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chart-quadrant"} {...others} />);
}

export default Component;
