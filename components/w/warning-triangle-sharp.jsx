import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j-hrxqe-r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 15.5h.01");
}

.pcvfvhibn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.49 9.03l4.17 7.45l.49.87H6.85l.49-.87l4.17-7.45l.49-.87zM12 12v1.5");
}

.qg1rkpyth {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.98 4.99l7.29 13.02l.98 1.74H2.75l.98-1.74l7.29-13.02l.98-1.74z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="qg1rkpyth"/><path class="pcvfvhibn"/><path class="j-hrxqe-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:warning-triangle-sharp"} {...others} />);
}

export default Component;
