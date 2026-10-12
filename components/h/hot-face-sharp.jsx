import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.qd6gbqz4k {
  d: path("m7 10.9l1.375-.917l1.375.917m4.5 0l1.375-.917L17 10.9m-7.25 2.95h4.5a2.25 2.25 0 0 1-4.5 0ZM12.6 5.8l.9 1.35v.6a.9.9 0 0 1-1.8 0v-.6z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="qd6gbqz4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hot-face-sharp"} {...others} />);
}

export default Component;
