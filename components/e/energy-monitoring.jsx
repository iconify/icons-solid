import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aafv4e46d {
  d: path("M13 7.5L9 14h3l-1 5l4-6.5h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vnh575cdh {
  d: path("M4.206 18.5a9 9 0 1 1 15.588 0");
}
</style><g class="ulnmmdpxh"><path class="vnh575cdh"/><path class="aafv4e46d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:energy-monitoring"} {...others} />);
}

export default Component;
