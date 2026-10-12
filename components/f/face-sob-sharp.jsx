import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.l8zx9lbmc {
  d: path("m9.75 8.75l-1.5-1.962l-1.5 1.962c-.65.85-.5 2.75-.5 4.25m8-4.25l1.5-1.962l1.5 1.962c.65.85.5 2.75.5 4.25m-7 1.25h2.5v2.25h-2.5v-1.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="l8zx9lbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:face-sob-sharp"} {...others} />);
}

export default Component;
