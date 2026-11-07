import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrxlgg64z.css';
import '../../css/b/bd6rgn7gz.css';
import '../../css/p/ps_lehzea.css';
import '../../css/u/uphz68ahd.css';
import '../../css/q/q51124gsc.css';
import '../../css/b/bckzjvbnt.css';
import '../../css/q/qofd5jbqg.css';
import '../../css/p/pp2za2bxu.css';
import '../../css/n/nvh0vzw2o.css';
import '../../css/k/koabnub0u.css';
import '../../css/d/dj_mp10gm.css';
import '../../css/c/caayajbxq.css';
import '../../css/d/dbrcsmbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="hrxlgg64z"/><path class="bd6rgn7gz"/><path class="ps_lehzea"/><path class="uphz68ahd"/><path class="q51124gsc"/><path class="bckzjvbnt"/><path class="qofd5jbqg"/><path class="pp2za2bxu"/><path class="nvh0vzw2o"/><path class="koabnub0u"/><path class="dj_mp10gm"/><path class="caayajbxq"/><path class="dbrcsmbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radial-blur-bold-duotone"} {...others} />);
}

export default Component;
