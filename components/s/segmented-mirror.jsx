import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gfjiv5boi {
  d: path("m12 3.25l4.25 2.5v5L12 13.25l-4.25-2.5v-5Z");
}

.nofw6la6m {
  d: path("m7.75 10.75l4.25 2.5v5l-4.25 2.5l-4.25-2.5v-5Zm8.5 0l4.25 2.5v5l-4.25 2.5l-4.25-2.5v-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nofw6la6m"/><path class="gfjiv5boi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:segmented-mirror"} {...others} />);
}

export default Component;
