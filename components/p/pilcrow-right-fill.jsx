import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v_8ur4b6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 3H6C4.3431 3 3 4.3431 3 6C3 7.6569 4.3431 9 6 9H8M8 3V13M13 3V13M3 17H21M17 13L21 17L17 21");
}
</style><path class="v_8ur4b6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pilcrow-right-fill"} {...others} />);
}

export default Component;
