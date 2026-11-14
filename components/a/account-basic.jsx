import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fqr7fwb4w {
  d: path("M21 9h-4.5a2 2 0 0 0-2 2v1.5a2 2 0 0 0 2 2H21m-3.5-2.75h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.noo9d3qxg {
  d: path("M7.375 4.75h9.25A4.375 4.375 0 0 1 21 9.125v5.75a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 14.875v-5.75A4.375 4.375 0 0 1 7.375 4.75");
}
</style><g class="hntgybcog"><path class="noo9d3qxg"/><path class="fqr7fwb4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:account-basic"} {...others} />);
}

export default Component;
