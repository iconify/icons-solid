import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e5kwf6bjt {
  stroke-opacity: 0.4;
  d: path("M9 6h.01M15 6h.01M9 12h.01M15 12h.01M9 18h.01M15 18h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pkdemnurw {
  d: path("M6 3H3v18h3M18 3h3v18h-3");
}
</style><g class="nrj6p8qat"><path class="e5kwf6bjt"/><path class="pkdemnurw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:brackets-dots-duocolor-sharp"} {...others} />);
}

export default Component;
