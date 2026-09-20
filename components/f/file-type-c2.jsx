import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.vzhsnld0w {
  fill: var(--svg-color--005f91, #005f91);
  d: path("M23 19.418a6.971 6.971 0 1 1-.05-6.918l6.093-3.509a14 14 0 1 0 .036 13.95Z");
}
</style><path class="vzhsnld0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-c2"} {...others} />);
}

export default Component;
