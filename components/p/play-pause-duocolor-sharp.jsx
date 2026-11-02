import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ktr2p3bbo {
  stroke-opacity: 0.4;
  d: path("M17 6v12m4-12v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rn6ytobgk {
  d: path("m3 6l10 6l-10 6Z");
}
</style><g class="nrj6p8qat"><path class="ktr2p3bbo"/><path class="rn6ytobgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:play-pause-duocolor-sharp"} {...others} />);
}

export default Component;
