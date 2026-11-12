import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c86uuzbhr {
  stroke-opacity: 0.4;
  d: path("M3 9h6M6 9v6");
}

.kjo_8vpbd {
  d: path("M13 10h3l5-5v14l-5-5h-3z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="c86uuzbhr"/><path class="kjo_8vpbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:volume-text-duocolor-sharp"} {...others} />);
}

export default Component;
