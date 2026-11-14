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

.vwhb4qx-y {
  d: path("m2.5 10l4-4l4 4v11h-8Zm11-4l4-4l4 4v15h-8Z");
}

.zvp4on1hn {
  d: path("M5.5 10.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm11-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><g class="ulnmmdpxh"><path class="vwhb4qx-y"/><path class="zvp4on1hn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:price-comparison"} {...others} />);
}

export default Component;
