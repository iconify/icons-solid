import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jn6xo5wqw {
  d: path("M2.5 12.5h19c0 4.5-4 7.5-9.5 7.5s-9.5-3-9.5-7.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yc0zwqbox {
  d: path("M10 8.25a2 4.25 0 1 0 4 0a2 4.25 0 1 0-4 0ZM3.5 9.5a2 3.5 0 1 0 4 0a2 3.5 0 1 0-4 0Zm13 0a2 3.5 0 1 0 4 0a2 3.5 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="jn6xo5wqw"/><path class="yc0zwqbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dates-bowl"} {...others} />);
}

export default Component;
