import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqh_1obaq {
  d: path("M10.25 12h3.5m-8.5-1.75v3.5L8 12Zm11 0v3.5L19 12Z");
}

.fhal2hbsy {
  width: 7.5px;
  height: 11.5px;
  x: 13.75px;
  y: 6.25px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-ioooe5m {
  width: 7.5px;
  height: 11.5px;
  x: 2.75px;
  y: 6.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="y-ioooe5m"/><rect class="fhal2hbsy"/><path class="aqh_1obaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:stitch-clip"} {...others} />);
}

export default Component;
