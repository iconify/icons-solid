import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jrue1rltm {
  d: path("M5.25 11.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4 0h.01m7.99-4v5M16 21.25c0-3.75 2-5.75 5.75-5.75c0 3.75-2 5.75-5.75 5.75Z");
}

.qrh-qzbfi {
  d: path("M13.4 19H2.5V4h19v8.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qrh-qzbfi"/><path class="jrue1rltm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:heat-pump-leaf"} {...others} />);
}

export default Component;
