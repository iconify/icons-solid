import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.szquu4vkp {
  fill: var(--svg-color--fff, #fff);
  d: path("M16.42 7.32h7v7h-7z");
}

.z9gni8buk {
  cx: 16px;
  cy: 16px;
  r: 14px;
  fill: var(--svg-color--00aab4, #00aab4);
}
</style><circle class="z9gni8buk"/><path class="szquu4vkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-teal"} {...others} />);
}

export default Component;
