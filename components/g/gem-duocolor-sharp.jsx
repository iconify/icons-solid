import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.anozd_bhu {
  d: path("M7 5h10l4 4l-9 10L3 9z");
}

.h5nl8ib0a {
  stroke-opacity: 0.4;
  d: path("m8 9l2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="h5nl8ib0a"/><path class="anozd_bhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:gem-duocolor-sharp"} {...others} />);
}

export default Component;
