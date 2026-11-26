import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zfckij8cr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 2L20 2M4 22L20 22M12 6L12 18M8.7071 9.2929L12 6L15.2929 9.2929M8.7071 14.7071L12 18L15.2929 14.7071");
}
</style><path class="zfckij8cr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-vertical-sharp"} {...others} />);
}

export default Component;
