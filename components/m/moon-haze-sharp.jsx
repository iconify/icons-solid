import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zic1wfb6v {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.055 13.571L18.326 13C18.758 12.091 19 11.074 19 10C17.018 11.585 14.162 11.427 12.367 9.633C10.573 7.838 10.415 4.982 12 3C8.134 3 5 6.134 5 10C5 11.074 5.242 12.091 5.674 13L5.945 13.571M3 17H21M4 21H11M13 21H20");
}
</style><path class="zic1wfb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:moon-haze-sharp"} {...others} />);
}

export default Component;
