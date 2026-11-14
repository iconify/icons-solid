import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iwxzgbagy {
  d: path("M10.5 7.5s-3 3.5-3 5.5a3 3 0 0 0 6 0c0-2-3-5.5-3-5.5Z");
}

.oli09ybgm {
  d: path("M5.5 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM3 21h15m-1.5-7h3a1.5 1.5 0 0 1 1.5 1.5V18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oli09ybgm"/><path class="iwxzgbagy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:water-treatment-plant"} {...others} />);
}

export default Component;
