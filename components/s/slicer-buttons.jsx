import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cacmwex1f {
  fill: currentColor;
  d: path("M2.5 5H11v5H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x74i2ib4t {
  d: path("M13 5h8.5v5H13ZM2.5 14H11v5H2.5ZM13 14h8.5v5H13Z");
}
</style><g class="ulnmmdpxh"><path class="cacmwex1f"/><path class="x74i2ib4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:slicer-buttons"} {...others} />);
}

export default Component;
