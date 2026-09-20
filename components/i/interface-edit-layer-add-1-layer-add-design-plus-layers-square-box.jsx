import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k31ylacpy.css';
import '../../css/u/uuyuxtb7n.css';
import '../../css/x/x0vtc_lde.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="k31ylacpy"/><rect class="uuyuxtb7n"/><path class="x0vtc_lde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-layer-add-1-layer-add-design-plus-layers-square-box"} {...others} />);
}

export default Component;
