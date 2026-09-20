import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kmj9aab0w {
  fill: currentColor;
  d: path("M3 10V3h7v7zm0 11v-7h7v7zm11-11V3h7v7zm0 11v-7h7v7z");
}
</style><path class="kmj9aab0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-comfy-alt"} {...others} />);
}

export default Component;
