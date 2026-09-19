import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s4lc7kbnz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.73 34.154H43.5l-7.916-10.179L43.5 13.846H23.73zm-1.666-19.985c-3.023 7.172-3.13 19.498-10.17 19.703c-5.782.169-7.434-6.17-7.393-9.823c-.023-6.742 4.876-9.995 7.394-10.178c6.257-.454 6.92 6.32 7.38 10.319c.835 7.258.515 9.919 4.455 9.96");
}
</style><path class="s4lc7kbnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:anime-boya"} {...others} />);
}

export default Component;
