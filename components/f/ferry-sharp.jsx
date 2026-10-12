import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s9xtj-b_d {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 11.25h.01m3.49 0h.01m3.49 0h.01");
}

.tyi1eguje {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 8.75V5.5h3v3.25M5.75 13.5V8.75h12.5v4.75Zm-3 0h18.5l-1.6 4l-.439 1.097l-1.181.003H5.97l-1.181-.003L4.35 17.5Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="tyi1eguje"/><path class="s9xtj-b_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ferry-sharp"} {...others} />);
}

export default Component;
