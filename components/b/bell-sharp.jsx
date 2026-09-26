import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dda_q--5h {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 16L5 16L5 15C5 14 7 13 7 8C7 5.2386 9.2386 3 12 3C14.7614 3 17 5.2386 17 8C17 13 19 14 19 15L19 16ZM9.7679 19.134C10.6252 20.6188 11.2855 21 12 21C12.7145 21 13.3748 20.6188 14.2321 19.134");
}
</style><path class="dda_q--5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bell-sharp"} {...others} />);
}

export default Component;
