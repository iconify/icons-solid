import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zmn30u74a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 13H14M7 8H21M7 3H21M18.6 21L21 18.75L18.6 16.5M21 18.75H7C4.7909 18.75 3 16.96 3 14.75V3");
}
</style><path class="zmn30u74a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:text-line-summary-fill"} {...others} />);
}

export default Component;
