import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.c_5r73bjd {
  fill: var(--svg-color--33a9dc, #33a9dc);
  d: path("m20.42 21.157l2.211 2.211L30 16l-7.369-7.369l-2.211 2.212L25.58 16Zm-8.84-10.314L9.369 8.631L2 16l7.369 7.369l2.211-2.211L6.42 16Zm5.831-3.166l1.6.437l-4.42 16.209l-1.6-.437z");
}
</style><path class="c_5r73bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-xsl"} {...others} />);
}

export default Component;
