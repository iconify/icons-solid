import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bj2quobyy {
  width: 8px;
  height: 11.75px;
  x: 8px;
  y: 9.5px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ziex7ubwk {
  d: path("M8 12.5h8m-8 5.75h8M12 9.5c0-2.5 1-4.25 2.5-4.25m1.75.25H18M15.9 4l1.25-1M15.9 7l1.25 1");
}
</style><g class="hntgybcog"><rect class="bj2quobyy"/><path class="ziex7ubwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:firecracker"} {...others} />);
}

export default Component;
