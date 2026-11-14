import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dw08_xb_f {
  d: path("M15.5 5.5L17 7l1.5-1.5M5 13.5h14M5 18h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ozkif0bun {
  d: path("M5.75 3h12.5a3.25 3.25 0 0 1 3.25 3.25a3.25 3.25 0 0 1-3.25 3.25H5.75A3.25 3.25 0 0 1 2.5 6.25A3.25 3.25 0 0 1 5.75 3");
}
</style><g class="hntgybcog"><path class="ozkif0bun"/><path class="dw08_xb_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dropdown-menu"} {...others} />);
}

export default Component;
