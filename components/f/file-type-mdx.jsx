import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.iz4b3nb1m {
  fill: var(--svg-color--f9ac00, #f9ac00);
  d: path("m28.8 20l-3.1-3.1l-3.1 3.1l-1-1.1l3.1-3.1l-3.2-3.2l1.1-1l3.1 3.2l3.2-3.2l1.1 1l-3.2 3.2l3.1 3.1Z");
}

.z9jxt_bwq {
  fill: var(--svg-color--d2d2d2, #d2d2d2);
  d: path("m20.3 16.5l-3.9 3.9l-4-3.9l1.1-1.1l2.1 2.1v-5.7h1.5v5.8l2.1-2.1Zm-16.8-.8l2.7 2.7L9 15.7v4.4h1.5V12l-4.3 4.3L2 12v8.1h1.5Z");
}
</style><path class="z9jxt_bwq"/><path class="iz4b3nb1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-mdx"} {...others} />);
}

export default Component;
