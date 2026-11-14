import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aeihrcc1b {
  d: path("M6 16.5c0-3 3-2 3-4.5c0-1.5.75-2.25 1.5-2.5m2.5-2h4m-3 2.25h2");
}

.oinpwu69o {
  d: path("M2.5 16.5h19V20h-19Zm7-9a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oinpwu69o"/><path class="aeihrcc1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:shelf-wobbler"} {...others} />);
}

export default Component;
