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

.lwnt4cbdg {
  d: path("M9.5 12.75V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.75m-5 2.5v6.25h5v-6.25M12 2.5c1.75 2 1.25 2.75 0 2.75s-1.75-.75 0-2.75");
}

.yy4vufhpm {
  d: path("m12 14l-6-3v6Zm0 0l6-3v6Z");
}
</style><g class="hntgybcog"><path class="lwnt4cbdg"/><path class="yy4vufhpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:confirmation-candle"} {...others} />);
}

export default Component;
