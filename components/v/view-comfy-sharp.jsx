import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o0vsvgbcl {
  fill: currentColor;
  d: path("M2 11V4h20v7zm8 9v-7h12v7zm-8 0v-7h6v7z");
}
</style><path class="o0vsvgbcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-comfy-sharp"} {...others} />);
}

export default Component;
