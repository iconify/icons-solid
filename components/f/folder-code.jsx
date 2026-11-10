import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pc-0bisdk.css';
import '../../css/y/yc1_cw_wv.css';
import '../../css/e/ei-dabzwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pc-0bisdk"/><path class="yc1_cw_wv"/><path class="ei-dabzwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-code"} {...others} />);
}

export default Component;
