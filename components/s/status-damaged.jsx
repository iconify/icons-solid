import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ffnaf-adh {
  d: path("m2.5 3.5l2 4.5v10.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5V8l2-4.5M4.5 8h15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pcw4smb7e {
  d: path("m12 8l-1.75 3.5l3 2.5l-2 3.5");
}
</style><g class="hntgybcog"><path class="ffnaf-adh"/><path class="pcw4smb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:status-damaged"} {...others} />);
}

export default Component;
