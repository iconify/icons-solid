import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rhq9kgb7w {
  d: path("M3 19V7a2 2 0 0 1 2-2h4.5l2 2H17a2 2 0 0 1 2 2v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yynl3zgcv {
  d: path("m3 19l3.25-7.5H21.5L18.25 19Z");
}
</style><g class="ulnmmdpxh"><path class="rhq9kgb7w"/><path class="yynl3zgcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:folder-open"} {...others} />);
}

export default Component;
