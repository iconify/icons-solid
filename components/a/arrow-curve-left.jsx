import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e18d4acjl {
  d: path("M8.5 4.5L5 8l3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vt014lbom {
  d: path("M18.5 20c0-7.5-5-12-13.5-12");
}
</style><g class="ulnmmdpxh"><path class="vt014lbom"/><path class="e18d4acjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:arrow-curve-left"} {...others} />);
}

export default Component;
