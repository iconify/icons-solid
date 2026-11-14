import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-bs5e8bx {
  d: path("M15.25 2.5L16 5l-2.5.75m-4 8.75h5a2 2 0 0 0 0-4a3 3 0 0 0-5.5.75a1.65 1.65 0 0 0 .5 3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yb4l-1b5j {
  d: path("M12 4a8 8 0 1 1-6.928 4");
}
</style><g class="hntgybcog"><path class="yb4l-1b5j"/><path class="g-bs5e8bx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:forecast-refresh"} {...others} />);
}

export default Component;
