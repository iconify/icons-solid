import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vx5nyhbzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.736 5.977S20.033 9.016 23.73 9.09c3.92.08 17.534-3.59 17.534-3.59M6.736 17.67h34.528l-.382 15c-.689 13.875-33.414 12.205-33.732.349z");
}
</style><path class="vx5nyhbzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:privacyidea-authenticator"} {...others} />);
}

export default Component;
