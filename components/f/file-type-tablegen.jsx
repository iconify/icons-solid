import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.amf1c9v_t {
  fill: var(--svg-color--f7bb07, #f7bb07);
  fill-rule: evenodd;
  d: path("M17 5h4c6 0 9 4 9 11s-3 11-9 11h-4zm5 5v12c2.2-.2 3-2.4 3-6s-.8-5.8-3-6");
}

.bkibtdb8l {
  fill: var(--svg-color--984c93, #984c93);
  d: path("M2 5h13v5h-4v17H6V10H2z");
}
</style><path class="bkibtdb8l"/><path class="amf1c9v_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-tablegen"} {...others} />);
}

export default Component;
