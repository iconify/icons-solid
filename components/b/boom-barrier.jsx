import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a9-9w__6c {
  width: 14px;
  height: 3.75px;
  x: 7.25px;
  y: 8.5px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rw3lygzul {
  d: path("m11.5 8.5l-1.75 3.75M15.5 8.5l-1.75 3.75M19.5 8.5l-1.75 3.75");
}

.rxe_0qbze {
  width: 4.5px;
  height: 14.75px;
  x: 2.75px;
  y: 6.5px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="rxe_0qbze"/><rect class="a9-9w__6c"/><path class="rw3lygzul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:boom-barrier"} {...others} />);
}

export default Component;
