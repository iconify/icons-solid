import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uamf9ms_y {
  d: path("M8.3 15H6V8.5h6.2M11 14a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm5.25 2.25L20 20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x8fptkbol {
  d: path("m16.31 20.23l-.81.27l-7-2l-6 2v-15l6-2l7 2l6-2v14.071");
}
</style><g class="ulnmmdpxh"><path class="x8fptkbol"/><path class="uamf9ms_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:map-search-area"} {...others} />);
}

export default Component;
