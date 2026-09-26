import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.to0c2ub7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u4az-xbcb {
  stroke-opacity: 0.4;
  d: path("M12 4L12 22M20 2L20 14");
}

.vqkc50bpn {
  d: path("M4 16L4 22");
}
</style><g class="to0c2ub7t"><path class="u4az-xbcb"/><path class="vqkc50bpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-offset-right-two-tone"} {...others} />);
}

export default Component;
