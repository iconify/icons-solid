import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.af1-7bbmy {
  stroke-opacity: 0.4;
  d: path("M3 5V3h2");
}

.mw8_iwbdm {
  d: path("M3 21v-4m0 0C3 9.268 9.268 3 17 3h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="af1-7bbmy"/><path class="mw8_iwbdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:corner-radius-duocolor-sharp"} {...others} />);
}

export default Component;
