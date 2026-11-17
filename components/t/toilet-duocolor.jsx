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

.oc5lclbat {
  d: path("M4 11h16a6 6 0 0 1-6 6v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a5 5 0 0 1-5-5Z");
}

.w7nlitb_l {
  stroke-opacity: 0.4;
  d: path("M4 11V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6");
}
</style><g class="nrj6p8qat"><path class="w7nlitb_l"/><path class="oc5lclbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:toilet-duocolor"} {...others} />);
}

export default Component;
