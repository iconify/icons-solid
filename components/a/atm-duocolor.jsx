import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c9r7c7bah {
  stroke-opacity: 0.4;
  d: path("M7 10h10v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zm3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qd4ng8j5u {
  d: path("M3 17V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12M7 6h10M3 10h4m10 0h4");
}
</style><g class="nrj6p8qat"><path class="c9r7c7bah"/><path class="qd4ng8j5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:atm-duocolor"} {...others} />);
}

export default Component;
