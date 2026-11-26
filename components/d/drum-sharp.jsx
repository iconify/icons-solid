import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oyf-k4bbv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 11L3 11L21 11L22 11M2 21L22 21M5 11L5 21M12 11L12 21M19 11L19 21M3.7071 2.7071L4 3L8 7L8.2929 7.2929M20.2929 2.7071L20 3L16 7L15.7071 7.2929");
}
</style><path class="oyf-k4bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:drum-sharp"} {...others} />);
}

export default Component;
