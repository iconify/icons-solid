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

.jqszqpbdg {
  d: path("m8 11.5l-3 3V18l3-2m8-4.5l3 3V18l-3-2m-5.25-7a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M12 19v3");
}

.urfg_mbrt {
  d: path("M12 2c3.5 2.5 4.5 6.5 4 14H8c-.5-7.5.5-11.5 4-14");
}
</style><g class="hntgybcog"><path class="urfg_mbrt"/><path class="jqszqpbdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:quickstart"} {...others} />);
}

export default Component;
