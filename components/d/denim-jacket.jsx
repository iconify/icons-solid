import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i67wxv63y {
  d: path("M9 3L7.5 7.5l4.5 2l4.5-2L15 3m-3 6.5v11m-6-9h3.25v3.25H6Zm8.75 0H18v3.25h-3.25Z");
}

.si4a-zbah {
  d: path("M9 3L4.5 4.5C3.5 4.83 3 5.75 3 6.75V20.5h18V6.75c0-1-.5-1.92-1.5-2.25L15 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="si4a-zbah"/><path class="i67wxv63y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:denim-jacket"} {...others} />);
}

export default Component;
