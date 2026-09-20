import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.anr0pobrv {
  fill: var(--svg-color--d2d2d2, #d2d2d2);
  d: path("M13.2 16a2.8 2.8 0 1 0-5.6 0a2.8 2.8 0 0 0 5.6 0m-5.6 5.59a2.8 2.8 0 1 0-5.6 0a2.8 2.8 0 0 0 5.6 0m22.4 0a2.8 2.8 0 1 0-5.6 0a2.8 2.8 0 0 0 5.6 0");
}

.z-42b4bkz {
  fill: var(--svg-color--f44250, #f44250);
  d: path("M24.4 16a2.78 2.78 0 0 1-2.8 2.8a2.8 2.8 0 0 0-2.8 2.79a2.78 2.78 0 0 1-2.8 2.8a2.8 2.8 0 1 1 0-5.6a2.8 2.8 0 1 0 0-5.58a2.8 2.8 0 1 1 2.8-2.8a2.78 2.78 0 0 0 2.8 2.8A2.8 2.8 0 0 1 24.4 16");
}
</style><path class="z-42b4bkz"/><path class="anr0pobrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-reactrouter"} {...others} />);
}

export default Component;
