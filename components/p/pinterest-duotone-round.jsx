import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bhwog2b5s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 21a9 9 0 0 1-9-9a9 9 0 0 1 9-9a9 9 0 0 1 9 9a9 9 0 0 1-9 9");
}

.ft5dv1b6b {
  fill: none;
}

.zec67ab0q {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 20l3-7m-5 1a4.92 4.92 0 0 1 0-4c1.733-3.9 7.267-3.9 9 0a4.924 4.924 0 0 1-5.626 6.794M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0");
}
</style><g class="ft5dv1b6b"><path class="bhwog2b5s"/><path class="zec67ab0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pinterest-duotone-round"} {...others} />);
}

export default Component;
