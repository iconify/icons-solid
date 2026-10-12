import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m10ymsugb {
  cx: 12px;
  cy: 12px;
  r: 3.5px;
}

.p9cw2vbot {
  d: path("M15.5 8.5v4.75a2.5 2.5 0 0 0 5 0V12a8.5 8.5 0 1 0-3.75 7.05");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="m10ymsugb"/><path class="p9cw2vbot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:at-sign-sharp"} {...others} />);
}

export default Component;
