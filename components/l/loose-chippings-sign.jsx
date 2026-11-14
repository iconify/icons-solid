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

.yc4y2ebhc {
  fill: currentColor;
  d: path("M8 16a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm4-3.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm7.5-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.zzbm4ab-k {
  d: path("M12 2.5L22 20H2Z");
}
</style><g class="ulnmmdpxh"><path class="zzbm4ab-k"/><path class="yc4y2ebhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:loose-chippings-sign"} {...others} />);
}

export default Component;
