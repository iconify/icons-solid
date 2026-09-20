import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqmd109zb.css';
import '../../css/u/uz-bfgn0y.css';
import '../../css/x/xbxw-bcec.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eqmd109zb"/><path clip-rule="evenodd" class="uz-bfgn0y"/><path class="xbxw-bcec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:pictures-folder-memories-flat"} {...others} />);
}

export default Component;
