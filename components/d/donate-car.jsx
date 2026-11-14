import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m51etslkz {
  d: path("M4 12H2.5V9c0-.75.5-1.25 1.25-1.5L5.5 7l2-3.5h5L15 7l1.25.25c.75.25 1.25.75 1.25 1.5V12H16m-4 0H8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wlsnx_g9s {
  d: path("M4 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.5 9.75l-2.5-2.5a1.77 1.77 0 0 1 2.5-2.5a1.77 1.77 0 0 1 2.5 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="m51etslkz"/><path class="wlsnx_g9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:donate-car"} {...others} />);
}

export default Component;
