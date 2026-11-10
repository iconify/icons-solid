import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tg-hp1rhw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 17H14V7H17M17 17H20V7H17M17 17V23M17 7V1M7 5H10V19H7M7 5H4V19H7M7 5V1M7 19V23");
}
</style><path class="tg-hp1rhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-horizontal-distribute-center-sharp"} {...others} />);
}

export default Component;
