import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sdy3bxb_e {
  fill: currentColor;
  d: path("M5 20v-6h3v6z");
}
</style><path class="sdy3bxb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-alt-1-bar"} {...others} />);
}

export default Component;
