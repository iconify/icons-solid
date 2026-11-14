import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bd-w_8bqd {
  d: path("m2 14l2-2l2 2m2.5-2a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.fjmk1tc6j {
  d: path("M12 4a8 8 0 1 1-8 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fjmk1tc6j"/><path class="bd-w_8bqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:net-retention"} {...others} />);
}

export default Component;
