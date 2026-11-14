import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ihi9ssviz {
  d: path("M9 9h6v3.25H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z_lq_6bbx {
  d: path("M6 14.25V9a6 6 0 0 1 12 0v5.25c0 1.5-.75 2.5-1.5 3l3 1.5c1 .5 1.5 1.5 1.5 2.75H3c0-1.25.5-2.25 1.5-2.75l3-1.5c-.75-.5-1.5-1.5-1.5-3Z");
}
</style><g class="ulnmmdpxh"><path class="z_lq_6bbx"/><path class="ihi9ssviz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:balaclava"} {...others} />);
}

export default Component;
