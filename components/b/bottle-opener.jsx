import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_qimlbtd {
  d: path("M10 12.33v6.92a2 2 0 0 0 4 0v-6.92a5 5 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8qktbmwb {
  d: path("M9.5 6.5h5a2.5 2.5 0 0 1-5 0");
}
</style><g class="hntgybcog"><path class="g_qimlbtd"/><path class="w8qktbmwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bottle-opener"} {...others} />);
}

export default Component;
