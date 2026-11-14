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

.ks64ycbsy {
  d: path("m8 17.5l3-3.5l2.5 2l2.5-4");
}

.u28ayjbia {
  d: path("M5 2.5h9.5L19 7v14.5H5Zm3 5h3.5");
}
</style><g class="hntgybcog"><path class="u28ayjbia"/><path class="ks64ycbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lab-report-science"} {...others} />);
}

export default Component;
