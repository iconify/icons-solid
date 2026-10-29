import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j0q-3cnxm.css';
import '../../css/v/vlq966tqd.css';
import '../../css/k/kg_ct3kkb.css';
import '../../css/n/nemamfnau.css';
import '../../css/h/ht_dcpb3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j0q-3cnxm"/><path class="vlq966tqd wm-k"/><path class="kg_ct3kkb wm-a"/><path class="nemamfnau wm-k"/><path class="ht_dcpb3v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-check-sketch"} {...others} />);
}

export default Component;
