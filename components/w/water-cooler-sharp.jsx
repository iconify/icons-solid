import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gxrhmbc_t {
  d: path("M8.75 18.25V14h6.5v4.25ZM10.5 14v1.25m3-1.25v1.25");
}

.x1hlo6bov {
  d: path("M10.75 11.25V9.522L9.35 8.9l-2.1-.933V2.75h9.5v5.217l-2.1.933l-1.4.622v1.728Zm-5 0h12.5v10H5.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="x1hlo6bov"/><path class="gxrhmbc_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:water-cooler-sharp"} {...others} />);
}

export default Component;
