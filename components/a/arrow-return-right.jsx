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

.uh0j-mlwd {
  d: path("M15 5.5H9.5a4.5 4.5 0 0 0 0 9h10");
}

.xj4tptb9e {
  d: path("m15.5 10.5l4 4l-4 4");
}
</style><g class="hntgybcog"><path class="uh0j-mlwd"/><path class="xj4tptb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:arrow-return-right"} {...others} />);
}

export default Component;
