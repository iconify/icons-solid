import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8q37kb0j {
  d: path("M3.5 17.5v-3A2.5 2.5 0 0 1 6 12h8a6 6 0 0 1 6 5.5Z");
}

.sje-adb9d {
  d: path("M7 12L4.5 3h-2M5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10 8h5v4h-5Zm5 1.5h2.5V7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f8q37kb0j"/><path class="sje-adb9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lawn-mower-petrol"} {...others} />);
}

export default Component;
