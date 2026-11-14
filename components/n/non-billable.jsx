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

.j7qjn6psg {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0");
}

.qxt1e63aj {
  d: path("M14.25 9.25c-.35-.75-1.15-1.5-2.25-1.5c-1.25 0-2.25.75-2.25 2c0 2.25 4.5 1.5 4.5 4.5c0 1.25-1 2-2.25 2c-1.1 0-2-.65-2.25-1.5M12 6v1.75m0 8.5V18M4.5 4.5l15 15");
}
</style><g class="hntgybcog"><path class="j7qjn6psg"/><path class="qxt1e63aj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:non-billable"} {...others} />);
}

export default Component;
