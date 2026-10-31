import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zo_xkwsga.css';
import '../../css/f/fvr6bd24w.css';
import '../../css/p/pb3v9gt6k.css';
import '../../css/a/ad-x1bbwf.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/x/x8aa_gbnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zo_xkwsga"/><path class="fvr6bd24w"/><path class="pb3v9gt6k"/><path class="ad-x1bbwf wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="wm-a x8aa_gbnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:laugh"} {...others} />);
}

export default Component;
