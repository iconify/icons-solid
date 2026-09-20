import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.axrxrfmgs {
  fill: currentColor;
  d: path("M4 20v-1h2v1zm0-3.75v-1h6.673v1zm0-3.75v-1h16v1zm0-3.75v-1h6.673v1zM4 5V4h2v1zm4.673 15v-1h2v1zm0-15V4h2v1zm4.654 15v-1h2v1zm0-3.75v-1H20v1zm0-7.5v-1H20v1zm0-3.75V4h2v1zM18 20v-1h2v1zm0-15V4h2v1z");
}
</style><path class="axrxrfmgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:key-visualizer-outline"} {...others} />);
}

export default Component;
