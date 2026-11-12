import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hllyxzboc {
  cx: 11.5px;
  cy: 11.5px;
  r: 9.5px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k9eq3dbyp {
  d: path("M9.73242 13.2678L11.5002 11.5L13.268 9.73223");
}

.mj_6ev9oe {
  d: path("M20 20L22 22");
}
</style><g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="mj_6ev9oe"/><path class="k9eq3dbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifier-slash-linear"} {...others} />);
}

export default Component;
