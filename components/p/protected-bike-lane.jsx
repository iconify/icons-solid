import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cye7hb5kq {
  d: path("M2.5 2.5h19m-19 19h19m-15-14v3m5.5-3v3m5.5-3v3m-11.75 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m8 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u_7whfbpp {
  d: path("m8 16.5l2.5-3H14l2 3");
}
</style><g class="hntgybcog"><path class="cye7hb5kq"/><path class="u_7whfbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:protected-bike-lane"} {...others} />);
}

export default Component;
