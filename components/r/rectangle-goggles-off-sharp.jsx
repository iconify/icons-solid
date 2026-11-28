import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0fazabjp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.6569 6L11.6569 6L22 6L22 16.3431L22 17.3431M18 18L16 18L12 13L8 18L2 18L2 6L6 6M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="b0fazabjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rectangle-goggles-off-sharp"} {...others} />);
}

export default Component;
