import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0wwf9gug {
  d: path("M3.5 11a6.5 6.5 0 0 1 13 0Z");
}

.y6voxgbpt {
  d: path("M10 4.5v-2h10M6 14l-1 3.5m5-3.5v3.5m4-3.5l-.5 2.5m3.75-1h3.5l1 3l-1 .25V20a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-1.25l-1-.25Z");
}
</style><g class="ulnmmdpxh"><path class="y0wwf9gug"/><path class="y6voxgbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dog-shower"} {...others} />);
}

export default Component;
