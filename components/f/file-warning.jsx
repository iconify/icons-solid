import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_isqubrv.css';
import '../../css/o/oimhr48-p.css';
import '../../css/c/cn1pfccgu.css';
import '../../css/l/lpka66bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p_isqubrv"/><path class="oimhr48-p"/><path class="cn1pfccgu"/><path class="lpka66bfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-warning"} {...others} />);
}

export default Component;
