import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.fc6ld8j4m {
  fill: var(--svg-color--005f91, #005f91);
  d: path("M26.914 13.8v1.54h-1.542v1.543h1.542v1.543h1.543v-1.543H30V15.34h-1.543V13.8Zm-3.5 0H21.87v1.54h-1.543v1.543h1.543v1.543h1.543v-1.543h1.543V15.34h-1.543Zm-3.654 5.226a6.167 6.167 0 1 1-.04-6.118l5.39-3.1a12.384 12.384 0 1 0 .032 12.34Z");
}
</style><path class="fc6ld8j4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-cpp2"} {...others} />);
}

export default Component;
