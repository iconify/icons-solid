import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.amrkiacxf {
  d: path("M7.5 15c1.5-.75 3 .75 4.5 0l2.25-1.125L16.5 15");
}

.ie2hojb6d {
  d: path("M9 2.75h6v4H9zm-3.75 7h13.5v11.5H5.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ie2hojb6d"/><path class="amrkiacxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:foundation-bottle-sharp"} {...others} />);
}

export default Component;
