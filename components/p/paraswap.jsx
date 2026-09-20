import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mjfum1ktx {
  fill: var(--svg-color--2669f5, #2669F5);
  d: path("M22 20L12.75 4L3.5 20zM6.25 11.5L10.5 4H2zm11.972 6.382H7.278l5.472-9.466z");
}
</style><path class="mjfum1ktx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:paraswap"} {...others} />);
}

export default Component;
