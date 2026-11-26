import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yx47rvucp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 5L11 5C14.866 5 18 8.134 18 12C18 15.866 14.866 19 11 19L7 19ZM1 8L7 8M1 16L7 16M18 12L23 12");
}
</style><path class="yx47rvucp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gate-and-sharp"} {...others} />);
}

export default Component;
