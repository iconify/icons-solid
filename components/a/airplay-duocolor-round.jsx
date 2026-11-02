import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hwnu8acqb {
  stroke-opacity: 0.4;
  d: path("M12 20h-1c-1.476 0-2.738-1.262-2-2l1-1a2.83 2.83 0 0 1 4 0l1 1c.738.738-.524 2-2 2z");
}

.nbb7xactf {
  d: path("M6 15a3 3 0 0 1-3-3V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4a3 3 0 0 1-3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hwnu8acqb"/><path class="nbb7xactf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:airplay-duocolor-round"} {...others} />);
}

export default Component;
