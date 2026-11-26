import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zrz50dbis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 5L11 5C14.866 5 18 8.134 18 12C18 15.866 14.866 19 11 19L9 19C7.8954 19 7 18.1046 7 17L7 7C7 5.8954 7.8954 5 9 5ZM2 8L7 8M2 16L7 16M18 12L22 12");
}
</style><path class="zrz50dbis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gate-and"} {...others} />);
}

export default Component;
