import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6pu8ubcl {
  d: path("M2.5 2.5h19v7h-19Zm0 9.75h6v9.25h-6Zm13 0h6v9.25h-6ZM12 9.5v3m-1.5 0h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v8ry1kbll {
  d: path("M4.5 17.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm13 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><g class="ulnmmdpxh"><path class="c6pu8ubcl"/><path class="v8ry1kbll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:home-theatre"} {...others} />);
}

export default Component;
