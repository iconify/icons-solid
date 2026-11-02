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

.oh0bhe76u {
  d: path("m3 10l3-3l3 3l3-3l3 3l3-3l3 3");
}

.zcoly0b5m {
  stroke-opacity: 0.4;
  d: path("m3 17l3-3l3 3l3-3l3 3l3-3l3 3");
}
</style><g class="nrj6p8qat"><path class="zcoly0b5m"/><path class="oh0bhe76u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zodiac-aquarius-duocolor-sharp"} {...others} />);
}

export default Component;
