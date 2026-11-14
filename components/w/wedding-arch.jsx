import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n9_-oe-ee {
  d: path("M5 21.5V11a7 7 0 0 1 .5-2.5m2-2.75a7 7 0 0 1 2.75-1.5m3.5 0a7 7 0 0 1 2.75 1.5m2 2.75A7 7 0 0 1 19 11v10.5M10.25 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.rxqsiclor {
  d: path("M4.5 7A1.75 1.75 0 1 0 8 7a1.75 1.75 0 1 0-3.5 0ZM16 7a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 16 7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n9_-oe-ee"/><path class="rxqsiclor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wedding-arch"} {...others} />);
}

export default Component;
