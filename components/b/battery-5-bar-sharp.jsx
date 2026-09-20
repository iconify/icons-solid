import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipsyi8bkb {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v18zm2-12h6V6H9z");
}
</style><path class="ipsyi8bkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-5-bar-sharp"} {...others} />);
}

export default Component;
