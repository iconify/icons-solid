import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vqh6s1b7m {
  d: path("M3.5 20.25h11.75v-.75c0-2.9-2.7-5-6.25-5s-6.25 2.1-6.25 5v.75zM15 4.5a3.5 3.5 0 0 1 0 7m2.5 3.25l3.75 1.047v4.453H19");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-aluxb2e {
  cx: 9px;
  cy: 8px;
  r: 3.5px;
}
</style><g class="x2cwu0gfd"><circle class="y-aluxb2e"/><path class="vqh6s1b7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:users-crown-sharp"} {...others} />);
}

export default Component;
