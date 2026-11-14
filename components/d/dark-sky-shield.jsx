import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g3y382w1l {
  d: path("M10.5 7c0-2.5 1.75-4 4-4s4 1.5 4 4ZM3 21.5h18M12.5 9.75L11 17.5m5.5-7.75L18 17.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.roqqafbak {
  d: path("M6 21.5V7a4 4 0 0 1 4-4h4.5");
}
</style><g class="hntgybcog"><path class="roqqafbak"/><path class="g3y382w1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dark-sky-shield"} {...others} />);
}

export default Component;
