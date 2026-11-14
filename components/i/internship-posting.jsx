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

.mr_l_acwh {
  d: path("M7 14.25v4.25c0 1.25 2.25 2.5 5 2.5s5-1.25 5-2.5v-4.25M9.75 4.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.sz5tfw-dc {
  d: path("M12 6.75v6h8.5v4.75");
}

.zmk64gb8v {
  d: path("m12.605 9.267l4.784 2.111a1.5 1.5 0 0 1 0 2.744l-4.784 2.111a1.5 1.5 0 0 1-1.21 0l-4.784-2.111a1.5 1.5 0 0 1 0-2.744l4.784-2.111a1.5 1.5 0 0 1 1.21 0");
}
</style><g class="hntgybcog"><path class="zmk64gb8v"/><path class="mr_l_acwh"/><path class="sz5tfw-dc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:internship-posting"} {...others} />);
}

export default Component;
