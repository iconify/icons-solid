import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hk0u4yb2t {
  stroke-opacity: 0.4;
  d: path("M7 9v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rg0tbnbdn {
  d: path("M3 5v14M3 9h14a4 4 0 0 1 4 4v6M3 16h18");
}
</style><g class="nrj6p8qat"><path class="hk0u4yb2t"/><path class="rg0tbnbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bed-duocolor-round"} {...others} />);
}

export default Component;
