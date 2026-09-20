import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zywfy28wn.css';
import '../../css/e/ejl1xmbrr.css';
import '../../css/p/pu8n9f6lr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zywfy28wn"/><path class="ejl1xmbrr"/><path class="pu8n9f6lr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:barcode"} {...others} />);
}

export default Component;
