import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c_a3v3r7n {
  d: path("M12 3.5a8.5 8.5 0 1 0 8.5 8.5H12Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lfgsgcc7i {
  d: path("M15 2.75A9 9 0 0 1 21.25 9H15Z");
}
</style><g class="hntgybcog"><path class="c_a3v3r7n"/><path class="lfgsgcc7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pie-chart-class"} {...others} />);
}

export default Component;
