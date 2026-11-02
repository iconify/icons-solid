import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l1txs0sri {
  stroke-opacity: 0.4;
  d: path("M6 19c0 1.105 1.79 2 4 2s4-.895 4-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ps-0evoyv {
  d: path("M10 11V7c0-1.838 2.162-2.919 4-2c1.648.824 1.648 3.176 0 4zm0 0v6");
}
</style><g class="nrj6p8qat"><path class="l1txs0sri"/><path class="ps-0evoyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:golf-duocolor-round"} {...others} />);
}

export default Component;
