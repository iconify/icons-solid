import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e0xlu6znc {
  d: path("M3 20.5V6a1.5 1.5 0 0 1 1.5-1.5H7A1.5 1.5 0 0 1 8.5 6v7h11a1.5 1.5 0 0 1 1.5 1.5v3H3m16.5 0v3");
}

.h4nozuvvx {
  d: path("M11.25 10h5v3h-5Zm-5.5-1.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e0xlu6znc"/><path class="h4nozuvvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:smart-bed"} {...others} />);
}

export default Component;
