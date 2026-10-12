import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iax6j2bbd {
  cx: 14px;
  cy: 4.25px;
  r: 1.25px;
}

.ogs3bcb3v {
  d: path("M4 10h17.25l-.3 1.21l-1.4 5.58l-.3 1.21H4.75l-.3-1.21l-1.4-5.58l-.3-1.21zm3 8l-1.25 3.25M17 18l1.25 3.25");
}

.w8bwd1bmk {
  cx: 9px;
  cy: 5.75px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="w8bwd1bmk"/><circle class="iax6j2bbd"/><path class="ogs3bcb3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:baby-bath-sharp"} {...others} />);
}

export default Component;
