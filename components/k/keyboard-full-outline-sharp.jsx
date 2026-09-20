import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kpr2rkb5k {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-6h16V6H4z");
}
</style><path class="kpr2rkb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-full-outline-sharp"} {...others} />);
}

export default Component;
