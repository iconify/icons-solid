import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_qg7abne {
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0H10c2.5 0 3.5-5.5 6-5.5h4.5M10 12c2.5 0 3.5 5.5 6 5.5h4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xl1zzdo6s {
  d: path("m18 4l2.5 2.5L18 9m0 6l2.5 2.5L18 20");
}
</style><g class="hntgybcog"><path class="g_qg7abne"/><path class="xl1zzdo6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:auto-route"} {...others} />);
}

export default Component;
