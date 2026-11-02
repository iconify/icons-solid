import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-gb0nb6l {
  stroke-opacity: 0.4;
  d: path("m5 9l-3 3l3 3m14-6l3 3l-3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u9nwozrcu {
  d: path("m14 10l2 2l-4 4l-4-4l4-4z");
}
</style><g class="nrj6p8qat"><path class="a-gb0nb6l"/><path class="u9nwozrcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:keyframes-duocolor-sharp"} {...others} />);
}

export default Component;
