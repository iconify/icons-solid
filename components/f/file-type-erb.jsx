import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.pcrg7_beg {
  fill: var(--svg-color--921a1e, #921a1e);
  d: path("M7.25 24.75h17.5L12.5 12.5l-5.25 5.25ZM2 30h28V2H16L2 16Zm25.375-2.625H4.625v-10.5l12.25-12.25h10.5Z");
}
</style><path class="pcrg7_beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-erb"} {...others} />);
}

export default Component;
