import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h4f8xqbrj {
  d: path("M5 3h14v18H5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vnl89fbsd {
  stroke-opacity: 0.4;
  d: path("M9 7h6v10H9Z");
}
</style><g class="nrj6p8qat"><path class="vnl89fbsd"/><path class="h4f8xqbrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:page-margins-duocolor-sharp"} {...others} />);
}

export default Component;
