import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r_qzw7byj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 10L9.5 4L14.5 4L16 10L8 10ZM2 20L3.5 14L8.5 14L10 20L2 20ZM14 20L15.5 14L20.5 14L22 20L14 20Z");
}
</style><path class="r_qzw7byj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gold-bars-sharp"} {...others} />);
}

export default Component;
