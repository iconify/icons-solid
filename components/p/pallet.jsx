import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0hybybgg {
  width: 13.5px;
  height: 6.5px;
  x: 5.25px;
  y: 3.25px;
  rx: 1.25px;
}

.c7ucf6g9v {
  width: 18.5px;
  height: 2.75px;
  x: 2.75px;
  y: 18.5px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pf0rh0kkx {
  width: 18.5px;
  height: 2.5px;
  x: 2.75px;
  y: 12px;
  rx: 0.75px;
}

.yk2mlqbbu {
  d: path("M5.5 14.5v3.75M12 14.5v3.75m6.5-3.75v3.75");
}

.zqws70s8g {
  d: path("M12 3.25v2.5");
}
</style><g class="hntgybcog"><rect class="b0hybybgg"/><path class="zqws70s8g"/><rect class="pf0rh0kkx"/><path class="yk2mlqbbu"/><rect class="c7ucf6g9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pallet"} {...others} />);
}

export default Component;
