import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m28wfubmv {
  stroke-opacity: 0.4;
  d: path("M13 13v3m4-3v3M3 8h2m-2 4h2m-2 4h2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xnzb-lb0h {
  d: path("M9 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Zm0 0h12");
}
</style><g class="nrj6p8qat"><path class="m28wfubmv"/><path class="xnzb-lb0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:data-packet-duocolor-round"} {...others} />);
}

export default Component;
