import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.arihkvbce {
  d: path("M11.4 12.25a4 4 0 1 1 0 8a4 4 0 1 1 0-8m2.83 1.17L18 9.65m-2.75 0H18v2.75");
}

.kd70e7blo {
  d: path("M8.75 7.25a4 4 0 1 1 0 8a4 4 0 1 1 0-8m2.83 1.17L16 4m-2.75 0H16v2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kd70e7blo"/><path class="arihkvbce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:male-male-symbol-sharp"} {...others} />);
}

export default Component;
