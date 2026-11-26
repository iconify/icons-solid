import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zlso1fbyy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 20L3 20L3 2L21 2L21 20L18 20M3 11L21 11M12 15L12 22M8.7071 18.7071L12 22L15.2929 18.7071");
}
</style><path class="zlso1fbyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-rows-move-down-sharp"} {...others} />);
}

export default Component;
