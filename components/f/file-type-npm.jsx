import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.hhc0ntbct {
  fill: var(--svg-color--fff, #fff);
  d: path("M7.25 7.25h17.5v17.5h-3.5v-14H16v14H7.25");
}

.sjygs8clv {
  fill: var(--svg-color--c12127, #c12127);
  d: path("M2 2h28v28H2");
}
</style><path class="sjygs8clv"/><path class="hhc0ntbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-npm"} {...others} />);
}

export default Component;
