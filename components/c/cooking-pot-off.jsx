import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f9x9w4bod {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11L4 18C4 19.6569 5.3431 21 7 21L17 21C18.0847 21 19.035 20.4244 19.5619 19.5619M2 11L11 11M4 7L7 7M20 14.3431L20 11M16.6569 11L22 11M12.6569 7L20 7M9.2325 3.5757C9.7282 3.2137 10.3392 3 11 3L13 3C14.6569 3 16 4.3431 16 6L16 7M2 2L22 22");
}
</style><path class="f9x9w4bod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cooking-pot-off"} {...others} />);
}

export default Component;
