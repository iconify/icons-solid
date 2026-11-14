import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i7i8upspy {
  d: path("M6.215 5.106a9 9 0 1 1-2.672 9.972");
}

.naxwb80nf {
  d: path("M6.25 2.25L9 3.5L7.75 6.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y3umyac0o {
  d: path("M12 6c2.5 3 4 5 4 7.5a4 4 0 0 1-8 0C8 11 9.5 9 12 6Z");
}
</style><g class="ulnmmdpxh"><path class="y3umyac0o"/><path class="i7i8upspy"/><path class="naxwb80nf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:water-footprint"} {...others} />);
}

export default Component;
