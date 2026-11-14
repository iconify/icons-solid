import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gdm0udiad {
  d: path("M4.5 3h15v10h-15Zm0 16.5a7.5 2 0 1 0 15 0a7.5 2 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w7d0inb0b {
  d: path("m8 10l3-3.25L13.5 9L16 6.5");
}
</style><g class="ulnmmdpxh"><path class="gdm0udiad"/><path class="w7d0inb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hologram"} {...others} />);
}

export default Component;
