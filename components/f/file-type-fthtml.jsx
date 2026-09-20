import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.lhg_lrb_z {
  fill: var(--svg-color--ef7623, #ef7623);
  d: path("M6.672 16.3V29h5.188V16.188h7.791l-.14 10.44L23.9 29h5v-4.178h-4.079v-8.634H30v-4.2h-5.179V5.381l-5.31 2.87v3.741H11.86V7.2h4.2L16 3h-4.987L6.672 5.381v6.611H2v4.2Z");
}
</style><path class="lhg_lrb_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-fthtml"} {...others} />);
}

export default Component;
