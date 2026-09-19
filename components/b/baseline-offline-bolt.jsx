import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cozu51o2b {
  fill: currentColor;
  d: path("M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98s9.98-4.47 9.98-9.98S17.51 2.02 12 2.02M11.48 20v-6.26H8L13 4v6.26h3.35z");
}
</style><path class="cozu51o2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-offline-bolt"} {...others} />);
}

export default Component;
