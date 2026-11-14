import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b9x-f2b8m {
  d: path("M4.25 6.75L7.5 3.5l3.25 3.25m2.5 10.5l3.25 3.25l3.25-3.25");
}

.e7fwg0z-n {
  d: path("M7.5 3.5v6c0 2.5 9 2.5 9 5v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e7fwg0z-n"/><path class="b9x-f2b8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sort-reverse"} {...others} />);
}

export default Component;
