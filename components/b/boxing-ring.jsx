import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dihddo_by {
  d: path("M6 18h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lqsnn7tzz {
  width: 18.5px;
  height: 5.5px;
  x: 2.75px;
  y: 15.25px;
  rx: 1.25px;
}

.namraacvy {
  d: path("M4.75 15.25v-12m14.5 12v-12m-14.5 3h14.5m-14.5 3h14.5m-14.5 3h14.5");
}
</style><g class="hntgybcog"><path class="namraacvy"/><rect class="lqsnn7tzz"/><path class="dihddo_by"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:boxing-ring"} {...others} />);
}

export default Component;
