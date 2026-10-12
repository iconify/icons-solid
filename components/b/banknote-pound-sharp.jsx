import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y5exwvb4f {
  d: path("M15.25 8.5A2.75 2.75 0 0 0 10 9.65v7.767l-1.25.833h7.5m-7.75-5.5h5");
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="y5exwvb4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:banknote-pound-sharp"} {...others} />);
}

export default Component;
