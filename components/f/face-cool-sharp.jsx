import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.mcz5l_bdx {
  d: path("M6 9h4.75v1.25a2.38 2.38 0 0 1-4.75 0Zm7.25 0H18v1.25a2.38 2.38 0 0 1-4.75 0Zm-2.5 0h2.5M9.5 15.75l2.975 1.275L14.5 15");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="mcz5l_bdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:face-cool-sharp"} {...others} />);
}

export default Component;
