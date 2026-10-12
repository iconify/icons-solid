import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dxlzgxf7a {
  d: path("M3 10.75v10.5M3 14h18.25v4.25H3zm16.75 4.25v3M5.5 11h5v3h-5zm6.75-6h6v3a3 3 0 0 1-6 0Z");
}

.iyxto8b-j {
  d: path("M18.25 5.75h2.5v3.5H18.1");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dxlzgxf7a"/><path class="iyxto8b-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bed-and-breakfast-sharp"} {...others} />);
}

export default Component;
