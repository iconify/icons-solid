import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.njimwfb8j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.5 12h.01m2.74 0h.01M19 12h.01");
}

.qmxlk2baz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 4.5L5.5 6.75L7.75 4.5M5.5 9.25v6.5m5.75-10.5h10m-10 13.5h10m-10-9h10v4.5h-10z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="qmxlk2baz"/><path class="njimwfb8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:code-fold-sharp"} {...others} />);
}

export default Component;
