import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qcs0clwsx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 2L5 13M5 22L5 16M2 16L8 16M12 2L12 10M12 22L12 13M9 10L15 10M19 2L19 11M19 22L19 14M16 14L22 14");
}
</style><path class="qcs0clwsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sliders-vertical-sharp-fill"} {...others} />);
}

export default Component;
