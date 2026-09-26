import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ra01bjbbm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3C15.3137 3 18 5.6863 18 9L18 15C18 18.3137 15.3137 21 12 21C8.6863 21 6 18.3137 6 15L6 9C6 5.6863 8.6863 3 12 3ZM12 6L12 9");
}
</style><path class="ra01bjbbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mouse-sharp"} {...others} />);
}

export default Component;
