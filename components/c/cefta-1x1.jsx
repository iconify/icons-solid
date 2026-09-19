import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ieyn-bn4v.css';
import '../../css/i/ijyrlebml.css';
import '../../css/m/m7kn11b3a.css';
import '../../css/a/an4o2p2yb.css';
import '../../css/g/go0acxb1z.css';
import '../../css/i/ig9gnw_ib.css';
import '../../css/t/tgu38o2_j.css';
import '../../css/m/me_wq-6vn.css';
import '../../css/t/tr1m34oqy.css';
import '../../css/h/holf0jzvb.css';
import '../../css/y/y8o3c_b5l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ieyn-bn4v"/><circle class="ijyrlebml"/><circle class="m7kn11b3a"/><path class="an4o2p2yb"/><path class="go0acxb1z"/><circle class="ig9gnw_ib"/><circle class="tgu38o2_j"/><circle class="me_wq-6vn"/><circle class="tr1m34oqy"/><circle class="holf0jzvb"/><path class="y8o3c_b5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cefta-1x1"} {...others} />);
}

export default Component;
