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

.r_8f1kudd {
  stroke-opacity: 0.4;
  d: path("M8 5v14m4-14v14m4-14v14");
}

.r21jxhxfq {
  d: path("M3 5h18v14H3Z");
}
</style><g class="nrj6p8qat"><path class="r_8f1kudd"/><path class="r21jxhxfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:container-duocolor-sharp"} {...others} />);
}

export default Component;
