import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwlnj-l0a.css';
import '../../css/v/vowxx6bbl.css';
import '../../css/u/uhvb3gqen.css';
import '../../css/s/se28-yalx.css';
import '../../css/g/gsfmep33v.css';
import '../../css/l/l1lmxwb4z.css';
import '../../css/w/w4kiojjbo.css';
import '../../css/e/ensp7zbne.css';
import '../../css/m/mgtdvebmn.css';
import '../../css/l/lzv58_bpl.css';
import '../../css/q/qe4t1tbur.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vwlnj-l0a"/><path class="vowxx6bbl"/><path class="uhvb3gqen"/><path class="se28-yalx"/><path class="gsfmep33v"/><path class="l1lmxwb4z"/><path class="w4kiojjbo"/><path class="ensp7zbne"/><path class="mgtdvebmn"/><path class="lzv58_bpl"/><path class="qe4t1tbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:baby-2"} {...others} />);
}

export default Component;
