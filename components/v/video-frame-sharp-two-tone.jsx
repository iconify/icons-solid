import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pk1pnpbjz {
  stroke-opacity: 0.4;
  d: path("M3 9L3 3L9 3M15 3L21 3L21 9M9 21L3 21L3 15");
}

.s4z7qlbgr {
  d: path("M7.9627 7.1063L15.0357 11L7.9627 14.8938ZM18 14L18 21M14.7071 17.7071L18 21L21.2929 17.7071");
}
</style><g class="gp_8x1bzb"><path class="pk1pnpbjz"/><path class="s4z7qlbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:video-frame-sharp-two-tone"} {...others} />);
}

export default Component;
