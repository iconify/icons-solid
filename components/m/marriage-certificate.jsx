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

.x00qgzx7x {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}

.yk1v3abqe {
  d: path("M12.25 9.6a2.4 2.4 0 1 0 0 3.8m-.5-3.8a2.4 2.4 0 1 1 0 3.8M8.25 6h7.5m-7.5 11.25h7.5");
}
</style><g class="hntgybcog"><rect class="x00qgzx7x"/><path class="yk1v3abqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:marriage-certificate"} {...others} />);
}

export default Component;
