import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xv6ssv52d.css';
import '../../css/n/nfwf-ozqa.css';
import '../../css/u/u_626v-kh.css';
import '../../css/a/avfv4-w5w.css';
import '../../css/k/kfknmnb9u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xv6ssv52d"/><path class="nfwf-ozqa"/><path class="u_626v-kh"/><path class="avfv4-w5w"/><path class="kfknmnb9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:weixin-search"} {...others} />);
}

export default Component;
