import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zl5ni9bgm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3L14.7896 9.2104L21 12L14.7896 14.7896L12 21L9.2104 14.7896L3 12L9.2104 9.2104L12 3Z");
}
</style><path class="zl5ni9bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sparkle-sharp-duotone"} {...others} />);
}

export default Component;
