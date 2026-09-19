import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l42o6d3xm {
  fill: currentColor;
  d: path("M20 8.67h-2.5V6H20zm-2.5 2H20v2.67h-2.5zM4 6h11.5v12H4zm13.5 12v-2.67H20V18z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.v4_nrzlpr {
  fill: currentColor;
  d: path("M2 4v16h20V4zm18 4.67h-2.5V6H20zm-2.5 2H20v2.67h-2.5zM4 6h11.5v12H4zm13.5 12v-2.67H20V18z");
}
</style><path class="l42o6d3xm"/><path class="v4_nrzlpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-view-sidebar"} {...others} />);
}

export default Component;
