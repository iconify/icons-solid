import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pam7ue5gf {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 21V3H13C15.2091 3 17 4.7909 17 7C17 9.2091 15.2091 11 13 11M5 11H14C16.7614 11 19 13.2386 19 16C19 18.7614 16.7614 21 14 21H5");
}
</style><path class="pam7ue5gf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bold-sharp-two-tone"} {...others} />);
}

export default Component;
