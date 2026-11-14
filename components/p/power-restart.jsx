import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cirgusbhj {
  d: path("M17.142 6.872a8 8 0 1 1-10.284 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ntc2gpbtp {
  d: path("M3.75 6.75h3v3M12 3v8");
}
</style><g class="hntgybcog"><path class="cirgusbhj"/><path class="ntc2gpbtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:power-restart"} {...others} />);
}

export default Component;
