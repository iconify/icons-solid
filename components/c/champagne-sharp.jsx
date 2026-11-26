import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v06c86b8g {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.1912 2L15.8088 2C16.2612 4.3236 16.6584 6.6576 17 9C17 12.5 14.8 15 12 15C9.2 15 7 12.5 7 9C7.3416 6.6576 7.7388 4.3236 8.1912 2ZM7.4663 6L16.5337 6M12 15L12 22M7 22L8 22L16 22L17 22");
}
</style><path class="v06c86b8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:champagne-sharp"} {...others} />);
}

export default Component;
