import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.afuxdilot {
  d: path("M7.5 17H9a3 3 0 0 1 6 0h1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_9tysb7r {
  d: path("m13.523 5.445l6.751 11.944A1.75 1.75 0 0 1 18.751 20H5.249a1.75 1.75 0 0 1-1.523-2.611l6.751-11.944a1.75 1.75 0 0 1 3.046 0");
}
</style><g class="hntgybcog"><path class="y_9tysb7r"/><path class="afuxdilot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:speed-bump-sign"} {...others} />);
}

export default Component;
