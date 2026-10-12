import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gjqabdb8d {
  d: path("m3 21l10.14-8.14M11.75 5.5v4a4.75 4.75 0 0 0 9.5 0v-4");
}

.jzi7h9b0r {
  d: path("M16.5 4.5c1.25 1.5 2 2.75 2 4.75a2 2 0 0 1-4 0c0-2 .75-3.25 2-4.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gjqabdb8d"/><path class="jzi7h9b0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fruit-picker-sharp"} {...others} />);
}

export default Component;
