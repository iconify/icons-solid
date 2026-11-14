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

.qx492g_et {
  d: path("M3 3h18M6 3h12a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-2.206 1.324l-4.588-2.448a1.5 1.5 0 0 0-1.412 0l-4.588 2.448A1.5 1.5 0 0 1 4.5 18.5v-14A1.5 1.5 0 0 1 6 3");
}

.zm1n004gn {
  d: path("m13.307 8.324l1.936 3.441A1.5 1.5 0 0 1 13.935 14h-3.87a1.5 1.5 0 0 1-1.308-2.235l1.936-3.441a1.5 1.5 0 0 1 2.614 0M12 9v2m0 1.75h.01");
}
</style><g class="hntgybcog"><path class="qx492g_et"/><path class="zm1n004gn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:banner-alert"} {...others} />);
}

export default Component;
