import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_ebczbfm {
  d: path("M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16m-9 0v-2a2 2 0 1 1 4 0v2");
}

.lgiv6v-yu {
  stroke-opacity: 0.4;
  d: path("m12 6.4l1.2 2.4l2.8.4l-2 2l.4 2.4l-2.4-1.2l-2.4 1.2l.4-2.4l-2-2l2.8-.4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lgiv6v-yu"/><path class="a_ebczbfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:police-station-duocolor"} {...others} />);
}

export default Component;
