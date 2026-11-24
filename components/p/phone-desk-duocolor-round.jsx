import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ckymexqkn {
  d: path("M15 5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9M6 9h6m-6 4h.01M9 13h.01M12 13h.01M6 16h.01M9 16h.01M12 16h.01");
}

.gts3bwjeq {
  stroke-opacity: 0.4;
  d: path("M15 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="gts3bwjeq"/><path class="ckymexqkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:phone-desk-duocolor-round"} {...others} />);
}

export default Component;
