import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ikupkv5_n {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.75v3.5h3.5l1 3M5.15 9.6A2.75 2.75 0 1 0 9 13.75m6.25-1.5v-8.5m-2 2l2-2l2 2");
}

.l493nbczd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17.25h16.5m0-14.5v18.5m-14.5-4v4");
}

.sjag9cbdr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 5.25h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="l493nbczd"/><path class="sjag9cbdr"/><path class="ikupkv5_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wheelchair-lift-sharp"} {...others} />);
}

export default Component;
