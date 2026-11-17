import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kksoo5x2s.css';
import '../../css/i/i41888b_p.css';
import '../../css/m/mx6o2rv6q.css';
import '../../css/s/s84s_lbks.css';
import '../../css/x/xnsux1j5k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kksoo5x2s"/><path class="i41888b_p"/><path class="mx6o2rv6q"/><path class="s84s_lbks"/><path class="xnsux1j5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vpn-sentinel"} {...others} />);
}

export default Component;
