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

.hvmtalb8v {
  fill: currentColor;
  d: path("M7.25 11.5h9.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-9.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5");
}

.i2-ny_bzf {
  d: path("M12 3v4");
}

.liukvs2qv {
  d: path("M3 2.5v19m18-19v19");
}
</style><g class="hntgybcog"><path class="liukvs2qv"/><path class="hvmtalb8v"/><path class="i2-ny_bzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:stop-line"} {...others} />);
}

export default Component;
