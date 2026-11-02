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

.tfw3n8bht {
  stroke-opacity: 0.4;
  d: path("M9 10h6");
}

.wkt6dcbza {
  d: path("M12 4h6v16l-6-4l-6 4V4z");
}
</style><g class="nrj6p8qat"><path class="tfw3n8bht"/><path class="wkt6dcbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bookmark-minus-duocolor-sharp"} {...others} />);
}

export default Component;
