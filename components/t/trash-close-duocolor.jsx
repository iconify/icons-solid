import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lin5xkb-l {
  d: path("M6 6v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6M4 6h16M8 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pane80bkq {
  stroke-opacity: 0.4;
  d: path("m10 12l4 4m0-4l-4 4");
}
</style><g class="nrj6p8qat"><path class="pane80bkq"/><path class="lin5xkb-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:trash-close-duocolor"} {...others} />);
}

export default Component;
