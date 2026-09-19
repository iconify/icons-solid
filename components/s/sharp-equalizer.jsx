import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hfpf-rs6d {
  fill: currentColor;
  d: path("M10 20h4V4h-4zm-6 0h4v-8H4zM16 9v11h4V9z");
}
</style><path class="hfpf-rs6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-equalizer"} {...others} />);
}

export default Component;
