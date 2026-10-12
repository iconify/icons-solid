import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_-q_pb0z {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
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

.o5grrub_r {
  cx: 7px;
  cy: 7px;
  r: 1.5px;
}

.t0u1xzm4y {
  d: path("M10.5 7H17M6.5 12h11m-11 4h7");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><circle class="o5grrub_r"/><path class="t0u1xzm4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:post-card"} {...others} />);
}

export default Component;
