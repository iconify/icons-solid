import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zzot_onjx.css';
import '../../css/k/kmig01bhu.css';
import '../../css/f/fmarqootd.css';
import '../../css/b/bfxhibc1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zzot_onjx"/><path class="kmig01bhu wm-k"/><path class="fmarqootd wm-k"/><path class="bfxhibc1f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:star-half-sketch"} {...others} />);
}

export default Component;
