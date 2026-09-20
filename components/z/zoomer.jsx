import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i54vffbpr.css';
import '../../css/q/qyq1v_bdd.css';
import '../../css/g/gow8s9byy.css';
import '../../css/i/i0ec5qz6e.css';
import '../../css/v/v67taz_fv.css';
import '../../css/e/ebqy8qbjp.css';
import '../../css/h/hrtp9lb-k.css';
import '../../css/a/auhbnn_dc.css';
import '../../css/y/ygjeypbgk.css';
import '../../css/x/xgqk7fyjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i54vffbpr"/><path class="qyq1v_bdd"/><path class="gow8s9byy"/><path class="i0ec5qz6e"/><path class="v67taz_fv"/><path class="ebqy8qbjp"/><path class="hrtp9lb-k"/><path clip-rule="evenodd" class="auhbnn_dc"/><path clip-rule="evenodd" class="ygjeypbgk"/><path class="xgqk7fyjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:zoomer"} {...others} />);
}

export default Component;
