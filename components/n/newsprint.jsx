import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b8pces73p {
  d: path("M9.5 10h4v4.5h-4Zm6.75 2.25h2.25M9.5 18h9");
}

.dh-6rabem {
  d: path("M6.5 19V4.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V19a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 19V9.5h4m3-3h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dh-6rabem"/><path class="b8pces73p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:newsprint"} {...others} />);
}

export default Component;
