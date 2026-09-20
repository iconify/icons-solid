import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.km2qmw5jf {
  fill: currentColor;
  d: path("M20.767 17.167L7.6 4H21v13.167zM4.81 4.041v1.415L2.161 2.808l.707-.708l18.685 18.685l-.708.707L17.354 18h-2.315v2H9v-2H3V4.04z");
}
</style><path class="km2qmw5jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tv-off-sharp"} {...others} />);
}

export default Component;
