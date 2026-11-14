import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.slt7slekb {
  d: path("M4.5 4.5h15v11h-15Zm-2 14h19");
}

.th-s2jb2s {
  d: path("M9.5 12.75a2 2 0 0 1 .25-4A3 3 0 0 1 15 9.5a1.75 1.75 0 0 1-.5 3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="slt7slekb"/><path class="th-s2jb2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:laptop-cloud"} {...others} />);
}

export default Component;
