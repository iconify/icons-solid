import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wk_lp_wlk.css';
import '../../css/a/a3hz4ubdx.css';
import '../../css/t/tsrmwqbrs.css';
import '../../css/p/p9rimibmf.css';
import '../../css/q/qcrhuvb5q.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGTSxJHbFm" x1="256" x2="256" y1="3" y2="513" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="wk_lp_wlk"/><stop offset=".258" class="a3hz4ubdx"/><stop offset=".663" class="tsrmwqbrs"/><stop offset="1"/></linearGradient><path fill="url(#SVGTSxJHbFm)" class="p9rimibmf"/><path class="qcrhuvb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lyrion-music-server"} {...others} />);
}

export default Component;
