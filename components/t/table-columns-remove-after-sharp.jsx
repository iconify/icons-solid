import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k2a_gpbei {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 6L20 3L2 3L2 21L20 21L20 18M11 3L11 21M15.7071 8.7071L22.2929 15.2929M22.2929 8.7071L15.7071 15.2929");
}
</style><path class="k2a_gpbei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-columns-remove-after-sharp"} {...others} />);
}

export default Component;
