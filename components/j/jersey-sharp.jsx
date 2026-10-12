import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n93v3pwle {
  d: path("m8.5 3.25l-5.5 3l1.75 4.25L7 9.5v11.75h10V9.5l2.25 1L21 6.25l-5.5-3a3.5 3.5 0 0 1-7 0Z");
}

.nc39x5bep {
  d: path("M10 11.75h4l-2.25 6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="n93v3pwle"/><path class="nc39x5bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:jersey-sharp"} {...others} />);
}

export default Component;
