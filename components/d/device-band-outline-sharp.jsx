import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zcl-y3b7h {
  fill: currentColor;
  d: path("M8 22V9H7V6h1V2h8v4h1v3h-1v13zm2-13.5V20h4V8.5zm0-2h4V4h-4zm0 2h4zm0-2h4z");
}
</style><path class="zcl-y3b7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:device-band-outline-sharp"} {...others} />);
}

export default Component;
