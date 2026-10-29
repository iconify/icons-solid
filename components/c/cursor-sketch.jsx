import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hdh_7z44n.css';
import '../../css/b/b0-fhem7h.css';
import '../../css/v/v81nbqbbf.css';
import '../../css/v/v0j5nabxd.css';
import '../../css/h/hg_ketbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hdh_7z44n"/><path class="b0-fhem7h wm-k"/><path class="v81nbqbbf wm-a"/><path class="v0j5nabxd wm-k"/><path class="hg_ketbuy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cursor-sketch"} {...others} />);
}

export default Component;
