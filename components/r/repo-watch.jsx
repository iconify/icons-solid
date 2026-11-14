import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.irn215s9b {
  d: path("m5 3.5l15 4l-1.25 5l-15-4Z");
}

.twdl6n0hv {
  fill: currentColor;
  d: path("M14.25 9a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-l-oli1j {
  d: path("M4 12.5v8M4 16h7.25v-5.5");
}
</style><g class="ulnmmdpxh"><path class="irn215s9b"/><path class="twdl6n0hv"/><path class="v-l-oli1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:repo-watch"} {...others} />);
}

export default Component;
