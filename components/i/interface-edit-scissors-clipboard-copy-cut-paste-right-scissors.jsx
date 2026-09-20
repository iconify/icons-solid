import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kvgswhbgn.css';
import '../../css/s/spwcq9bsy.css';
import '../../css/k/k0otkhbbz.css';
import '../../css/y/yk299o1ob.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="kvgswhbgn"/><circle class="spwcq9bsy"/><path class="k0otkhbbz"/><circle class="yk299o1ob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-scissors-clipboard-copy-cut-paste-right-scissors"} {...others} />);
}

export default Component;
