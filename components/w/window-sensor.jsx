import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l7zqybbds {
  d: path("M13.5 6.5h4v4h-4Zm0 7h4v4h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0xktr-7d {
  d: path("M2.5 2.5h19v19h-19Zm7 0v19");
}
</style><g class="ulnmmdpxh"><path class="z0xktr-7d"/><path class="l7zqybbds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:window-sensor"} {...others} />);
}

export default Component;
