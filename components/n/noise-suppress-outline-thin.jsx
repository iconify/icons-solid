import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0xzggwkx {
  d: path("m13.5 8 4 4");
}

.d-u37lkcx {
  d: path("M6.5 11.5 9 9l2.5 2.5");
}

.hatc3g_gl {
  d: path("m17.5 8 -4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jq9hovbrs {
  d: path("M14 4h5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.yomctlb4k {
  d: path("M7 17v4l4 -4");
}
</style><g class="hntgybcog"><path class="jq9hovbrs"/><path class="yomctlb4k"/><path class="d-u37lkcx"/><path class="c0xzggwkx"/><path class="hatc3g_gl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:noise-suppress-outline-thin"} {...others} />);
}

export default Component;
