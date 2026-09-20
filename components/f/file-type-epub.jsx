import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.kjqmeuchd {
  fill: var(--svg-color--86b918, #86b918);
  d: path("M16 24.8L7.2 16L16 7.2l2.93 2.93L13.07 16L16 18.93l8.8-8.8l-7.67-7.66a1.6 1.6 0 0 0-2.26 0l-12.4 12.4a1.6 1.6 0 0 0 0 2.26l12.4 12.4a1.6 1.6 0 0 0 2.26 0l12.4-12.4a1.6 1.6 0 0 0 0-2.26l-1.8-1.8z");
}
</style><path class="kjqmeuchd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-epub"} {...others} />);
}

export default Component;
