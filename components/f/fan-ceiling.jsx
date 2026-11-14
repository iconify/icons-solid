import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gu1e2pb_s {
  d: path("M13 11.75a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0Zm0 5.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0Zm-10-5.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0Zm0 5.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0Z");
}

.svdp5p9sw {
  d: path("M9.5 2.5h5m-2.5 0V12m-2.5 2.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="svdp5p9sw"/><path class="gu1e2pb_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fan-ceiling"} {...others} />);
}

export default Component;
