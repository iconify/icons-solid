import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jlcjwhb2d {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 2L2 16.0001L5 16M16 5L16.0001 2L6.6569 2M22 22L8 22L8 8M12.6569 8L22 8L22 17.3431M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="jlcjwhb2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:copy-off-sharp"} {...others} />);
}

export default Component;
