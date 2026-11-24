import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7-t2qbtf {
  stroke-opacity: 0.4;
  d: path("M15 18h6m-3-3v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sniojv7el {
  d: path("M11 21H4V9h16v2M8 9V7a4 4 0 1 1 8 0v2");
}
</style><g class="nrj6p8qat"><path class="h7-t2qbtf"/><path class="sniojv7el"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-plus-corner-duocolor-sharp"} {...others} />);
}

export default Component;
