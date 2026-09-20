import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xq_ez15tr.css';
import '../../css/x/xrw5hkbia.css';
import '../../css/z/zra8kbb3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xq_ez15tr"/><path class="xrw5hkbia"/><path class="zra8kbb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:worldwide-web-network-www"} {...others} />);
}

export default Component;
