import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2ht35-si.css';
import '../../css/z/zpa45dbgg.css';
import '../../css/z/zcr29hbxq.css';
import '../../css/e/ebo8zjbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.58 10.37)" class="v2ht35-si"/><path class="zpa45dbgg"/><rect transform="matrix(0 -1 -1 0 21.58 10.37)" class="zcr29hbxq"/><path class="ebo8zjbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:playlist-first"} {...others} />);
}

export default Component;
