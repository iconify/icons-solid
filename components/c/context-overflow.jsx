import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6cifuo-f {
  d: path("M7.25 17.75h9.5M12 14.25V2.75M8.75 6L12 2.75L15.25 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nahtygbdq {
  width: 16.5px;
  height: 13px;
  x: 3.75px;
  y: 8.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="nahtygbdq"/><path class="a6cifuo-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:context-overflow"} {...others} />);
}

export default Component;
