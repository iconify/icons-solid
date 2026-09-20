import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bcf3kebdt {
  fill: currentColor;
  d: path("M3 23v-4.15l-2-2V6h2V1h2v5h2v10.85l-2 2V23zm8 0v-4.15l-2-2V6h2V1h2v5h2v10.85l-2 2V23zm8 0v-4.15l-2-2V6h2V1h2v5h2v10.85l-2 2V23zM3 8v4h2V8zm8 0v4h2V8zm8 0v4h2V8zM4 17l1-1v-2H3v2zm8 0l1-1v-2h-2v2zm8 0l1-1v-2h-2v2zm0-4");
}
</style><path class="bcf3kebdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:settings-input-component-outline-sharp"} {...others} />);
}

export default Component;
