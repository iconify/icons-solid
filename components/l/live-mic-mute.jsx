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

.jbazu8bsg {
  d: path("M9 3za3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3");
}

.jnof8gp5m {
  d: path("M3 10.5a6 6 0 0 0 12 0m-6 6V21m7.5-17l4 4m0-4l-4 4");
}
</style><g class="hntgybcog"><path class="jbazu8bsg"/><path class="jnof8gp5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:live-mic-mute"} {...others} />);
}

export default Component;
