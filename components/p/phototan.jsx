import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kkyuwsbgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.17 38.39h4.11v4.11h-4.11Zm-16.45 0h4.11v4.11h-4.11Zm8.22-8.22h4.12v4.11h-4.12Zm-8.22 0h4.11v4.11h-4.11Zm16.45-8.23h4.11v4.12h-4.11Zm-16.45 0h4.11v4.12h-4.11Zm-8.22 0h4.11v4.12H5.5Zm32.89 0h4.11v4.12h-4.11Zm0-8.22h4.11v4.11h-4.11Zm-16.45 0h4.12v4.11h-4.12Zm8.23-8.22h4.11v4.11h-4.11Zm-8.23 0h4.12v4.11h-4.12Zm-8.22 0h4.11v4.11h-4.11Zm-8.22 0h4.11v4.11H5.5Z");
}
</style><path class="kkyuwsbgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:phototan"} {...others} />);
}

export default Component;
