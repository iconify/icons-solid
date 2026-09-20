import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y0rbhee_v {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v18zm2-2h6V6H9z");
}
</style><path class="y0rbhee_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-0-bar-sharp"} {...others} />);
}

export default Component;
