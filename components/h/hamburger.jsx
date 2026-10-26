import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dw6dr1x5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11C4 6.5817 7.5817 3 12 3C16.4183 3 20 6.5817 20 11M4 12L20 12C21.1046 12 22 12.8954 22 14C22 15.1046 21.1046 16 20 16L4 16C2.8954 16 2 15.1046 2 14C2 12.8954 2.8954 12 4 12ZM4 16L4 18C4 19.6569 5.3431 21 7 21L17 21C18.6569 21 20 19.6569 20 18L20 16");
}
</style><path class="dw6dr1x5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hamburger"} {...others} />);
}

export default Component;
