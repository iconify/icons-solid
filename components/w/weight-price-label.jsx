import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jzktz9b1x {
  d: path("M12 18H2.5V5h19v6.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wd8bsurri {
  fill: currentColor;
  d: path("M5.5 8.5h10V11h-10Z");
}

.wga60euph {
  d: path("M15.75 14.5h4.5L22 21.75h-8ZM18 17h.01");
}
</style><g class="ulnmmdpxh"><path class="jzktz9b1x"/><path class="wd8bsurri"/><path class="wga60euph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:weight-price-label"} {...others} />);
}

export default Component;
