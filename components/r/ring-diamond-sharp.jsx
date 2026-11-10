import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zl5ttabds {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.146 8.26L8 4.5L10 2H14L16 4.5L13.854 8.26M12 22C8.134 22 5 18.87 5 15C5 11.13 8.134 8 12 8C15.866 8 19 11.13 19 15C19 18.87 15.866 22 12 22Z");
}
</style><path class="zl5ttabds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ring-diamond-sharp"} {...others} />);
}

export default Component;
