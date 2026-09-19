import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/tqw8k0f0r.css';
import '../../css/i/ir6hycbbm.css';
import '../../css/d/dknf_wbxh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHGE1fbFZ"><g class="rohhhzb0l"><circle class="tqw8k0f0r"/><path class="ir6hycbbm"/><circle class="dknf_wbxh"/></g></mask></defs><path mask="url(#SVGHGE1fbFZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cd"} {...others} />);
}

export default Component;
