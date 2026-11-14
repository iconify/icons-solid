import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0qm4qbga {
  d: path("M10.5 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydtwoeb5x {
  d: path("M4.5 14.75a7.5 7.5 0 0 1 15 0Zm-2 2.75h19V20h-19Z");
}
</style><g class="ulnmmdpxh"><path class="ydtwoeb5x"/><path class="c0qm4qbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cafeteria-staff"} {...others} />);
}

export default Component;
