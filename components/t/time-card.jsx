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

.skms4sbjj {
  d: path("M12 6.75v1.5L13 9m-5 4.25h8M8 16h8m-8 2.75h5");
}

.x00qgzx7x {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}

.zz413hbju {
  cx: 12px;
  cy: 8px;
  r: 2.75px;
}
</style><g class="hntgybcog"><rect class="x00qgzx7x"/><circle class="zz413hbju"/><path class="skms4sbjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:time-card"} {...others} />);
}

export default Component;
