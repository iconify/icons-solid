import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pyq9fdbkk {
  d: path("m15.5 17.75l2.5-2.5l2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vrt729m1q {
  d: path("M4 2.5h3L9.5 5v6A1.5 1.5 0 0 1 8 12.5H4A1.5 1.5 0 0 1 2.5 11V4A1.5 1.5 0 0 1 4 2.5Zm12 0h3L21.5 5v6a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 16 2.5ZM6 15.25V19a2.5 2.5 0 0 0 2.5 2.5h7A2.5 2.5 0 0 0 18 19v-3.75");
}
</style><g class="ulnmmdpxh"><path class="vrt729m1q"/><path class="pyq9fdbkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:migration-guide"} {...others} />);
}

export default Component;
