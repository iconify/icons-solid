import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.j8izj1sfb {
  fill: var(--svg-color--5fb050, #5fb050);
  d: path("M2 16h14V2h14v28H2Z");
}
</style><path class="j8izj1sfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-wallaby"} {...others} />);
}

export default Component;
