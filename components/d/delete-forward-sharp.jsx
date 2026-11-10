import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rvb0qhbdx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.293 8.71L10 12M10 12L6.707 15.29M10 12L6.707 8.71M10 12L13.293 15.29M22 12L15 4H2V20H15L22 12Z");
}
</style><path class="rvb0qhbdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:delete-forward-sharp"} {...others} />);
}

export default Component;
