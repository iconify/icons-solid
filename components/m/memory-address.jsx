import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a74n1qbdr {
  d: path("M2.5 8H5m-2.5 4H5m-2.5 4H5m14-8h2.5M19 12h2.5M19 16h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.usvaryo9c {
  d: path("M5 4h14v16H5Zm7 0v16M5 9.25h14m-14 5.5h14");
}

.w9j3izz5n {
  fill: currentColor;
  d: path("M14.25 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="usvaryo9c"/><path class="w9j3izz5n"/><path class="a74n1qbdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:memory-address"} {...others} />);
}

export default Component;
