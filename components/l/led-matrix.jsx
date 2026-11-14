import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i9uaiogbw {
  d: path("M6.75 6.75h1.5v1.5h-1.5Zm4.5 0h1.5v1.5h-1.5Zm4.5 0h1.5v1.5h-1.5Zm-9 4.5h1.5v1.5h-1.5Zm4.5 0h1.5v1.5h-1.5Zm4.5 0h1.5v1.5h-1.5Zm-9 4.5h1.5v1.5h-1.5Zm4.5 0h1.5v1.5h-1.5Zm4.5 0h1.5v1.5h-1.5Z");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="i9uaiogbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:led-matrix"} {...others} />);
}

export default Component;
