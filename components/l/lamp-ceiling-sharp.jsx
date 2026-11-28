import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hcy5p4bek {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 2L16 2M12 2L12 10M8.0002 10L15.9998 10L19.9993 18L4.0007 18ZM8 18C8 20.2091 9.7909 22 12 22C14.2091 22 16 20.2091 16 18");
}
</style><path class="hcy5p4bek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:lamp-ceiling-sharp"} {...others} />);
}

export default Component;
