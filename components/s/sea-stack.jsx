import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lveo3ccan {
  d: path("M2.5 17q1.75-1.5 3.5 0h12q1.75 1.5 3.5 0M6 20.5q2-1.5 4 0t4 0t4 0");
}

.mc7txkb2x {
  d: path("m8 17l.75-8l1.5-5h3.25l1.75 4.5L16 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mc7txkb2x"/><path class="lveo3ccan"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sea-stack"} {...others} />);
}

export default Component;
