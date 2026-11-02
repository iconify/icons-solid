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

.trai7bbkt {
  d: path("m4 5l12 7l-12 7Z");
}

.uax7j3gsp {
  stroke-opacity: 0.4;
  d: path("M20 5v14");
}
</style><g class="nrj6p8qat"><path class="uax7j3gsp"/><path class="trai7bbkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skip-forward-duocolor-sharp"} {...others} />);
}

export default Component;
