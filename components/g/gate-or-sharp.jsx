import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.swjdacg6s {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5C11.4139 5.6172 15.2606 7.9252 18 12C15.2606 16.0748 11.4139 18.3828 6 19C7.3684 15.8421 8 13.9473 8 12C8 10.0527 7.3684 8.1579 6 5ZM1 8L7.2031 8M1 16L7.2031 16M18 12L23 12");
}
</style><path class="swjdacg6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gate-or-sharp"} {...others} />);
}

export default Component;
