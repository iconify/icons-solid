import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l12mn-bas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.564 45.326a21.504 21.504 0 0 1 19.868-19.77m-17.633 4.278l-4.058 4.058l-5.575-5.626l-5.575 5.626l-4.058-4.058l9.633-9.633Zm-7.598-11.668l4.058-4.058l5.575 5.626l5.575-5.626l4.058 4.058l-9.633 9.633Zm5.41 27.274l19.821-19.884");
}

.wanjjomet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.611 45.44q-.798.06-1.611.06A21.5 21.5 0 1 1 45.5 24q0 .766-.053 1.518");
}
</style><path class="wanjjomet"/><path class="l12mn-bas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:stickerconv"} {...others} />);
}

export default Component;
