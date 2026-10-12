import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e95esp8an {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5H17.5v16.25H2.75z");
}

.n6p1zvb1j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20.25 5h.01");
}

.tqgodjbap {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 8.75h10v5.5h-10zm3.33.75v4m3.34-4v4m-5.17 4.25h6.75m4-4.75h2.75V5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="e95esp8an"/><path class="tqgodjbap"/><path class="n6p1zvb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:slot-machine-sharp"} {...others} />);
}

export default Component;
