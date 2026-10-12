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

.q_mladbtv {
  d: path("M6.5 12a5.5 5.5 0 0 1 11 0Zm5.5 0v4.25a1.25 1.25 0 0 1-2.5 0");
}

.ru6wkbb1e {
  width: 18.5px;
  height: 17.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="ru6wkbb1e"/><path class="q_mladbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:keep-dry"} {...others} />);
}

export default Component;
