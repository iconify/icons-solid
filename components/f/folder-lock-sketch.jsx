import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/txbke2bqd.css';
import '../../css/b/bp_fuo5aq.css';
import '../../css/l/lt_h75dyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="txbke2bqd"/><path class="bp_fuo5aq wm-k"/><path class="lt_h75dyx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-lock-sketch"} {...others} />);
}

export default Component;
