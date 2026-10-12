import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.eolkxabco {
  d: path("M7.75 10.25L9 11.813l1.25-1.563m3.5 0L15 11.813l1.25-1.563m-9-2.75l1.4-1.05l1.6.8m6.5.25l-1.4-1.05l-1.6.8m-4.25 8l1.077 1h2.846l1.077-1");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="eolkxabco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:relieved-sharp"} {...others} />);
}

export default Component;
