import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mn-9uubxy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7L3 3L7 3M9 3L14 3M20 8L20 3L16 3M8 20L3 20L3 16M3 9L3 14M11.0009 11L20.9991 11L18 15.5001L18 19.5L14 20.9994L14 15.5001Z");
}
</style><path class="mn-9uubxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:filter-dashed-panel-sharp"} {...others} />);
}

export default Component;
