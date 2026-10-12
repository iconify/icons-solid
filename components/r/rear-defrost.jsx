import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.la5qfrrxr {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2.5px;
}

.n_7qvw31r {
  d: path("M8.5 15.5c-1-1.25 1-2.5 0-3.75s1-2.5 0-3.75m3.5 7.5c-1-1.25 1-2.5 0-3.75s1-2.5 0-3.75m3.5 7.5c-1-1.25 1-2.5 0-3.75s1-2.5 0-3.75");
}
</style><g class="hntgybcog"><rect class="la5qfrrxr"/><path class="n_7qvw31r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rear-defrost"} {...others} />);
}

export default Component;
