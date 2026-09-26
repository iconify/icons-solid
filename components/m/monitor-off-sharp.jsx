import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rwwoteeup {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 16L2 16L2 4L4 4M8.6569 4L22 4L22 16L20.6569 16M12 16L12 20M7 20L17 20M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="rwwoteeup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:monitor-off-sharp"} {...others} />);
}

export default Component;
