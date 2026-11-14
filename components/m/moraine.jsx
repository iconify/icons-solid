import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s9kr0qb9x {
  d: path("M7.5 12.5L9 7l4-1.5l1.5 5.5l-4 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2x36_bmf {
  d: path("m3 18.5l1-4l3.5-2l3 1.5v4.5Zm7.5 0V14l4-3l4.5 1l2 6.5Z");
}
</style><g class="ulnmmdpxh"><path class="y2x36_bmf"/><path class="s9kr0qb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:moraine"} {...others} />);
}

export default Component;
