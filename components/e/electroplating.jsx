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

.tixspdm4f {
  d: path("M12 11za1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 12 15.5a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 12 11");
}

.wn3na7bsy {
  d: path("M3.5 6v13A2.5 2.5 0 0 0 6 21.5h12a2.5 2.5 0 0 0 2.5-2.5V6m-17 3.5h17M6.75 3v14.5M17.25 3v14.5M12 3v8");
}
</style><g class="hntgybcog"><path class="wn3na7bsy"/><path class="tixspdm4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:electroplating"} {...others} />);
}

export default Component;
