import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.clclfqblq {
  stroke-opacity: 0.4;
  d: path("M8 7h8m-8 5h8m-8 5h8");
}

.gms1kji-y {
  d: path("M8 3v18m8-18v18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="clclfqblq"/><path class="gms1kji-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ladder-duocolor-round"} {...others} />);
}

export default Component;
