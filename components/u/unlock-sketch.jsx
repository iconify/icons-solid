import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aykbejljt.css';
import '../../css/v/vd-u-mbdv.css';
import '../../css/g/g73p47bsz.css';
import '../../css/y/y7zzpobdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="aykbejljt"/><path class="vd-u-mbdv wm-a"/><path class="g73p47bsz wm-k"/><path class="wm-a y7zzpobdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:unlock-sketch"} {...others} />);
}

export default Component;
