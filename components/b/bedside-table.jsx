import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7jabvbxp.css';
import '../../css/u/uyezhqice.css';
import '../../css/f/fpuyb9bst.css';
import '../../css/q/qhkj8rbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z7jabvbxp"/><path class="uyezhqice"/><rect transform="matrix(0 -1 -1 0 21.58 20.82)" class="fpuyb9bst"/><path class="qhkj8rbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bedside-table"} {...others} />);
}

export default Component;
