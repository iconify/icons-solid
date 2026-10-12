import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhcsjwttb {
  cx: 12px;
  cy: 13.5px;
  r: 7.75px;
}

.i4yafsxlk {
  d: path("M9.75 2.75h4.5m-2.25 0v3m0 7.75V8.75a4.75 4.75 0 0 1 4.75 4.75Zm0 0v4.75a4.75 4.75 0 0 1-4.75-4.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="fhcsjwttb"/><path class="i4yafsxlk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:interval-timer-sharp"} {...others} />);
}

export default Component;
