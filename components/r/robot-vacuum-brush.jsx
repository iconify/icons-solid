import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bix35ybqr {
  d: path("M3 8v3a9 3.5 0 0 0 18 0V8M5 17.25h14v3H5Z");
}

.bp7wkccig {
  d: path("M3 8a9 3.5 0 1 0 18 0A9 3.5 0 1 0 3 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bp7wkccig"/><path class="bix35ybqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:robot-vacuum-brush"} {...others} />);
}

export default Component;
