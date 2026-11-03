import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sz55tfbom {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 7L16.6 10.4667L17 11.0001L17 20L15 22L9 22L7 20L7 11.0001L7.4 10.4667L10 7M18 7L6 7M16.2913 1.5145L13 7");
}
</style><path class="sz55tfbom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:can-soda-sharp"} {...others} />);
}

export default Component;
