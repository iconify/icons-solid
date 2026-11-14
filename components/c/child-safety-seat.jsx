import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pg1c9_o9a {
  d: path("M8.25 6.5v6L11.5 15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xi38kkcul {
  d: path("M6.5 3H10a1.5 1.5 0 0 1 1.5 1.5v8H17a2 2 0 0 1 2 2v2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 16.5v-12A1.5 1.5 0 0 1 6.5 3Zm-2 18h15");
}
</style><g class="ulnmmdpxh"><path class="xi38kkcul"/><path class="pg1c9_o9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:child-safety-seat"} {...others} />);
}

export default Component;
