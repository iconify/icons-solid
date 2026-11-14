import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bqd_68gfx {
  d: path("M3 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.dj5203bzc {
  d: path("M6 14a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m11.5-2h4m-2.25-2.25L21.5 12l-2.25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bqd_68gfx"/><path class="dj5203bzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:alpha-particle"} {...others} />);
}

export default Component;
