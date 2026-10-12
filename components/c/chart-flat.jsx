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

.mnlg2gbmj {
  width: 3.5px;
  height: 6px;
  x: 10.25px;
  y: 14.25px;
  rx: 1px;
}

.o43yxpb3h {
  d: path("M2.75 8.75h17.5M17 5.5l3.25 3.25L17 12");
}

.ofqqfjbuw {
  width: 3.5px;
  height: 6px;
  x: 3.75px;
  y: 14.25px;
  rx: 1px;
}

.zn8ibpofd {
  width: 3.5px;
  height: 6px;
  x: 16.75px;
  y: 14.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="ofqqfjbuw"/><rect class="mnlg2gbmj"/><rect class="zn8ibpofd"/><path class="o43yxpb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chart-flat"} {...others} />);
}

export default Component;
