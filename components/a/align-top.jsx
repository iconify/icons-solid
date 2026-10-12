import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.espnbvbqq {
  width: 5px;
  height: 8.25px;
  x: 13.75px;
  y: 7.25px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sz57t6b-v {
  d: path("M2.75 3.75h18.5");
}

.w7kgzjbrv {
  width: 5px;
  height: 13px;
  x: 5.25px;
  y: 7.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="w7kgzjbrv"/><rect class="espnbvbqq"/><path class="sz57t6b-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:align-top"} {...others} />);
}

export default Component;
