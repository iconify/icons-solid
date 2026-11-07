import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.poo2p_bsk {
  d: path("M4 4h16v13H4Zm5 16h6");
}

.rxmqudbjz {
  stroke-opacity: 0.4;
  d: path("m10 7l5 3.5l-5 3.5Z");
}
</style><g class="nrj6p8qat"><path class="rxmqudbjz"/><path class="poo2p_bsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:monitor-play-duocolor-sharp"} {...others} />);
}

export default Component;
