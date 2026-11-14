import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_i2f7bto {
  d: path("M7 8.25a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0Zm6 0a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0ZM6.25 12.5a2.25 1.25 0 1 0 4.5 0a2.25 1.25 0 1 0-4.5 0Zm7 0a2.25 1.25 0 1 0 4.5 0a2.25 1.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wj96bfb1c {
  d: path("M5 5h14l2.5 11v2.75h-19V16ZM2.5 16h19");
}
</style><g class="ulnmmdpxh"><path class="wj96bfb1c"/><path class="d_i2f7bto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:baking-tray-cookies"} {...others} />);
}

export default Component;
