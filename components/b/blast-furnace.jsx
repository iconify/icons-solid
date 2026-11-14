import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qmyg63bpk {
  d: path("M10.5 21v-2a1.5 1.5 0 0 1 3 0v2");
}

.ujy0tybfh {
  d: path("m9 21l-1.5-8l2-7.5a2.5 2.5 0 0 1 5 0l2 7.5l-1.5 8Zm6-14h4.5v14M3 21h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ujy0tybfh"/><path class="qmyg63bpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:blast-furnace"} {...others} />);
}

export default Component;
