import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i0nnczrvr {
  cx: 14.5px;
  cy: 15.75px;
  r: 2.75px;
}

.sthifjb7v {
  d: path("M4.25 2.75h15.5v18.5H4.25zM7.75 7h8.5m-8.5 3.5h5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sthifjb7v"/><circle class="i0nnczrvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:visa-x-sharp"} {...others} />);
}

export default Component;
