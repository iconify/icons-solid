import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.thm_z2b0l {
  fill: currentColor;
  d: path("M19 1H5v22h14zm-5 20h-4v-1h4zm3-3H7V4h10z");
}
</style><path class="thm_z2b0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-phone-android"} {...others} />);
}

export default Component;
