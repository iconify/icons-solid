import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bgkzdvb9l {
  d: path("M2.75 11.5v9.75m18.5-9.75v9.75");
}

.bifs787es {
  width: 11.5px;
  height: 9.5px;
  x: 6.25px;
  y: 2.75px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jmkimgbez {
  width: 12.5px;
  height: 4.5px;
  x: 5.75px;
  y: 15.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="bifs787es"/><rect class="jmkimgbez"/><path class="bgkzdvb9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cinema-seat"} {...others} />);
}

export default Component;
