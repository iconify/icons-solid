import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1pky4f_u {
  d: path("M4.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM16 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM7 9V7c0-2.5-4.5-2.5-4.5.5V12");
}

.jow90tyqy {
  d: path("M2.5 16h19v-3.5L19 9h-2.5v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4gu6sb3a {
  d: path("M6.5 9h6a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 5 14.5v-4A1.5 1.5 0 0 1 6.5 9Z");
}
</style><g class="ulnmmdpxh"><path class="jow90tyqy"/><path class="v4gu6sb3a"/><path class="e1pky4f_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:aircraft-fuel-truck"} {...others} />);
}

export default Component;
