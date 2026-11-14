import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jzqn7wr6e {
  d: path("M10 14.5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0Zm-2.75-4a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-2-2.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm.25-1l-3-3.75");
}

.p6zl8sb3u {
  d: path("M10.25 8.5C11 5 13.75 3 16 3.5c.25 2.25-2.25 4.75-4.75 5.75M8.5 12.5L6 17m4-4.25l-.25 5.75m1.75-6L13 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jzqn7wr6e"/><path class="p6zl8sb3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:insect-bite"} {...others} />);
}

export default Component;
