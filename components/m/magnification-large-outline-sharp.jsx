import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mo2c33bvl {
  fill: currentColor;
  d: path("M5.5 14.5h11v-7h-11zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="mo2c33bvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:magnification-large-outline-sharp"} {...others} />);
}

export default Component;
