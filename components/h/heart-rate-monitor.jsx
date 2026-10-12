import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d7lirwbtl {
  width: 18.5px;
  height: 13px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4_0yckvh {
  d: path("M5.75 10.5h3L10 8l2 5.5l1.75-4l1 1h3.5M12 16.75v4.5m-3.75 0h7.5");
}
</style><g class="hntgybcog"><rect class="d7lirwbtl"/><path class="v4_0yckvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:heart-rate-monitor"} {...others} />);
}

export default Component;
