import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/coblgcc_e.css';
import '../../css/x/xishbgben.css';
import '../../css/y/yl_md4t5z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="coblgcc_e"/><circle class="xishbgben"/><path class="yl_md4t5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-folder-block-block-folder-subtract"} {...others} />);
}

export default Component;
