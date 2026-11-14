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

.olzkx_9do {
  d: path("M11 13.5h2l-.25 1.5L14 19.5l-2 2l-2-2l1.25-4.5Z");
}

.zc3z0--xs {
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-5 15c0-5 3.5-8 8.5-8s8.5 3 8.5 8");
}
</style><g class="hntgybcog"><path class="zc3z0--xs"/><path class="olzkx_9do"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bank-manager"} {...others} />);
}

export default Component;
