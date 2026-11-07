import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j47yg1kmm {
  stroke-opacity: 0.4;
  d: path("m15 10l-3-3l-3 3m3-3v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.poo2p_bsk {
  d: path("M4 4h16v13H4Zm5 16h6");
}
</style><g class="nrj6p8qat"><path class="j47yg1kmm"/><path class="poo2p_bsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:monitor-upload-duocolor-sharp"} {...others} />);
}

export default Component;
