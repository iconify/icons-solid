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

.viql7ebgf {
  d: path("M7 2.5h10A3.5 3.5 0 0 1 20.5 6v12a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18V6A3.5 3.5 0 0 1 7 2.5m-3.5 5h17");
}

.ydhefs-tx {
  d: path("M7.75 14.5a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0M7 5h.01");
}
</style><g class="hntgybcog"><path class="viql7ebgf"/><path class="ydhefs-tx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gadget-appliance-cover"} {...others} />);
}

export default Component;
