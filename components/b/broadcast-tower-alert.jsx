import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s81sl9bas {
  d: path("M4.5 19.5L10 7l5.213 11.847");
}

.sh1e9xg1j {
  d: path("M8.5 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-1.25 7.75h5.5m1.08-10.964a5 5 0 0 1 0 6.428m-7.66 0a5 5 0 0 1 0-6.428M18 14.5V18m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s81sl9bas"/><path class="sh1e9xg1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:broadcast-tower-alert"} {...others} />);
}

export default Component;
