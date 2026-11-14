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

.naiv1kbof {
  d: path("M10.25 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M12 12.5v5m-2.25 4l2.25-4l2.25 4");
}

.rdipjixcd {
  d: path("M3.5 21.5V4h17v17.5");
}

.t01-m2bae {
  d: path("m6.5 4l2.25 8.5h6.5L17.5 4");
}
</style><g class="hntgybcog"><path class="rdipjixcd"/><path class="t01-m2bae"/><path class="naiv1kbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:outdoor-gym"} {...others} />);
}

export default Component;
