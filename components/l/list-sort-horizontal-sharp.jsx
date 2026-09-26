import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zvg0gs5tx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 6L3 6M6.2929 2.7071L3 6L6.2929 9.2929M13 6L21 6M17.7071 2.7071L21 6L17.7071 9.2929M6 12L6 22M12 12L12 22M18 12L18 22");
}
</style><path class="zvg0gs5tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-sort-horizontal-sharp"} {...others} />);
}

export default Component;
