import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.us5su5opn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3L19 3C20.10457 3 21 3.89543 21 5L21 19C21 20.10457 20.10457 21 19 21L13 21C11.89543 21 11 20.10457 11 19L11 5C11 3.89543 11.89543 3 13 3ZM7 5V19M3 7V17");
}
</style><path class="us5su5opn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gallery-horizontal-end"} {...others} />);
}

export default Component;
