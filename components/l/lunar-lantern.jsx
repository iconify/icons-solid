import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fk-4k-ero {
  d: path("M10.25 3h3.5A1.25 1.25 0 0 1 15 4.25a1.25 1.25 0 0 1-1.25 1.25h-3.5A1.25 1.25 0 0 1 9 4.25A1.25 1.25 0 0 1 10.25 3M12 18.5v3m0-16a3.5 6.5 0 0 0 0 13m0-13a3.5 6.5 0 0 1 0 13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uhech8bqs {
  d: path("M3.5 12a8.5 6.5 0 1 0 17 0a8.5 6.5 0 1 0-17 0");
}
</style><g class="hntgybcog"><path class="uhech8bqs"/><path class="fk-4k-ero"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lunar-lantern"} {...others} />);
}

export default Component;
