import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c80bcbbci {
  d: path("M4 9h16v12H4Zm7 5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 1v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wb0mm3bek {
  stroke-opacity: 0.4;
  d: path("M8 9V7a4 4 0 1 1 8 0v2");
}
</style><g class="nrj6p8qat"><path class="wb0mm3bek"/><path class="c80bcbbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-keyhole-duocolor-sharp"} {...others} />);
}

export default Component;
