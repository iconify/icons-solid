import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gli7hhbby {
  d: path("M12 20.5V11L5 4m7 7l7-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ju5kit9ai {
  d: path("M5 9V4h5m4 0h5v5");
}
</style><g class="hntgybcog"><path class="gli7hhbby"/><path class="ju5kit9ai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:decision-log"} {...others} />);
}

export default Component;
