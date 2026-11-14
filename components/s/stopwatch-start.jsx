import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cehb8pb0w {
  d: path("M4 13.25a8 8 0 1 0 16 0a8 8 0 1 0-16 0ZM12 2.5v2.75M10 2.5h4");
}

.o5l6hu9yr {
  d: path("m9.75 9.25l6.75 4l-6.75 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cehb8pb0w"/><path class="o5l6hu9yr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:stopwatch-start"} {...others} />);
}

export default Component;
