import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abjx4fbtp {
  d: path("M21 3L21 21L3 21L3 3L21 3Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rnu_b9b5a {
  d: path("M7 16L14 16M8 12L17 12M13 8L17 8");
}
</style><g class="gp_8x1bzb"><path class="abjx4fbtp"/><path class="rnu_b9b5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-align-offset-bottom-sharp"} {...others} />);
}

export default Component;
