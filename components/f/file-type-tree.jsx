import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ijof8f2ly {
  fill: var(--svg-color--d2d2d2, #d2d2d2);
  d: path("M3.021 2.022h1.997v27.955H3.021zM28.98 27.98H5.018v1.997H28.98zm-6.99-8.985H5.019v1.997h16.973zM13.006 9.01H5.018v1.997h7.987z");
}
</style><path class="ijof8f2ly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-tree"} {...others} />);
}

export default Component;
