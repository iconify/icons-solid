import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jvayet_ht {
  stroke-opacity: 0.4;
  d: path("M16 3v2M2 2l20 20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pd3w2ubpi {
  d: path("M20 20c-.314.694-1.189 1-2 1H6a2 2 0 0 1-2-2V7c0-.811.306-1.686 1-2m6 0h7a2 2 0 0 1 2 2v7M4 9h5m6 0h5");
}
</style><g class="nrj6p8qat"><path class="jvayet_ht"/><path class="pd3w2ubpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-off-duocolor"} {...others} />);
}

export default Component;
