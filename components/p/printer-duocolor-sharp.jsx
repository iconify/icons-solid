import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hhtt84bzu {
  d: path("M6 17H3V7h18v10h-3M6 7V3h12v4m-8 4h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uit7r8ros {
  stroke-opacity: 0.4;
  d: path("M6 15h12v6H6Z");
}
</style><g class="nrj6p8qat"><path class="uit7r8ros"/><path class="hhtt84bzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:printer-duocolor-sharp"} {...others} />);
}

export default Component;
