import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8z1id9_n {
  d: path("M7.5 5.75h3v3h-3Zm6 0h3v3h-3ZM7.5 11h3v3h-3Zm6 0h3v3h-3Z");
}

.kmj5eebni {
  d: path("M3 3h18v13.5H3Zm-.5 17h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kmj5eebni"/><path class="a8z1id9_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:internal-developer-portal"} {...others} />);
}

export default Component;
