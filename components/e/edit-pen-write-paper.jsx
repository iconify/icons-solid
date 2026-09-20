import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tr97dznbu.css';
import '../../css/w/wgr3atlzf.css';
import '../../css/h/hye_smbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="tr97dznbu"/><path class="wgr3atlzf"/><path class="hye_smbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:edit-pen-write-paper"} {...others} />);
}

export default Component;
