import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ckdeowbwc {
  cx: 12px;
  cy: 6px;
  r: 3.25px;
}

.t168znbbl {
  d: path("M9 11.5h6V17H9zm1.5 5.5v4.25m3-4.25v4.25m-4.75-8L6 10.75m9.25 2.5l2.75-2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ckdeowbwc"/><path class="t168znbbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:toddler-sharp"} {...others} />);
}

export default Component;
