import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nmcz43m8g {
  fill: currentColor;
  d: path("m12 22l-4-4l1.4-1.425l1.6 1.6V13.9q-1.725-.35-2.863-1.713T7 9q0-2.075 1.463-3.537T12 4t3.538 1.463T17 9q0 1.825-1.137 3.188T13 13.9v4.275l1.6-1.575L16 18z");
}
</style><path class="nmcz43m8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:swipe-down-alt-sharp"} {...others} />);
}

export default Component;
