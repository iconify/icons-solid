import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jx9cq1bfm {
  d: path("m11 6l6 6l-6 6a2.83 2.83 0 0 1-4 0l-2-2a2.83 2.83 0 0 1 0-4zM8 3l3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xsgqi2bof {
  stroke-opacity: 0.4;
  d: path("M5 12h12m4 7a2 2 0 1 1-4 0c0-1 1-2 2-3c1 1 2 2 2 3");
}
</style><g class="nrj6p8qat"><path class="xsgqi2bof"/><path class="jx9cq1bfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paint-bucket-duocolor-round"} {...others} />);
}

export default Component;
