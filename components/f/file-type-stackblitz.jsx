import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.xvaihfybl {
  fill: var(--svg-color--2196f3, #2196f3);
  d: path("M6.3 18.8h8.2L9.9 30l15.8-16.8h-8.2L22.1 2z");
}
</style><path class="xvaihfybl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-stackblitz"} {...others} />);
}

export default Component;
