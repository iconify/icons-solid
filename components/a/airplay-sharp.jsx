import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.otgwc7mka {
  fill: currentColor;
  d: path("m6 21l6-6l6 6zm-4-2V3h20v16h-3l-7-7l-7 7z");
}
</style><path class="otgwc7mka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:airplay-sharp"} {...others} />);
}

export default Component;
