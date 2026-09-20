import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.wfzq7r5zj {
  fill: var(--svg-color--813cf3, #813cf3);
  d: path("m12.042 6.858l8.029 4.59v9.014l-8.029-4.594zM20.5 20.415l7.959-4.575V6.887L20.5 11.429zM3.541 11.01l8.03 4.589V6.59L3.541 2zm8.501 14.4L20.071 30v-9.043l-8.029-4.589z");
}
</style><path class="wfzq7r5zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-terraform"} {...others} />);
}

export default Component;
