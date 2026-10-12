import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f-9e4rrar {
  d: path("M2.75 20.75h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hvkmgeb3s {
  d: path("m8 6.75l2-2.5h4");
}

.jgdawjjhh {
  cx: 17px;
  cy: 18px;
  r: 1.25px;
}

.lsh48acyg {
  cx: 7px;
  cy: 18px;
  r: 1.25px;
}

.q5e6q08zg {
  d: path("M5.5 9.75h3m2.25 0h2.5m2.25 0h3m-15.75 3.5h18.5");
}

.sio8s-ban {
  width: 18.5px;
  height: 10px;
  x: 2.75px;
  y: 6.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="hvkmgeb3s"/><rect class="sio8s-ban"/><path class="q5e6q08zg"/><circle class="lsh48acyg"/><circle class="jgdawjjhh"/><path class="f-9e4rrar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:metro-train"} {...others} />);
}

export default Component;
