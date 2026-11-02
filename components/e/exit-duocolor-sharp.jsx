import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cy2yacgfe {
  d: path("M21 17v4H3V3h18v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tkn535btd {
  stroke-opacity: 0.4;
  d: path("m15 15l3-3l-3-3m3 3H8");
}
</style><g class="nrj6p8qat"><path class="tkn535btd"/><path class="cy2yacgfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:exit-duocolor-sharp"} {...others} />);
}

export default Component;
