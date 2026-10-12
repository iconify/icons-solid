import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b9uxguv0s {
  width: 6px;
  height: 7px;
  x: 13.75px;
  y: 13.25px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hyy3k7bnw {
  d: path("M3.75 12.75h6m4 3.5h6");
}

.ls2j7k7cr {
  width: 6px;
  height: 7px;
  x: 3.75px;
  y: 9.75px;
  rx: 2px;
}

.pqcvs5bpi {
  d: path("m2.75 4.25l18.5 5M6.75 5.33v4.42m10-1.75v5.25");
}
</style><g class="hntgybcog"><path class="pqcvs5bpi"/><rect class="ls2j7k7cr"/><rect class="b9uxguv0s"/><path class="hyy3k7bnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:gondola-lift"} {...others} />);
}

export default Component;
