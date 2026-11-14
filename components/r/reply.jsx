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

.pqns4qbqd {
  d: path("m9.5 6l-5 5l5 5");
}

.q1_kx380q {
  d: path("M4.5 11H14a5.5 5.5 0 0 1 5.5 5.5V19");
}
</style><g class="hntgybcog"><path class="q1_kx380q"/><path class="pqns4qbqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:reply"} {...others} />);
}

export default Component;
