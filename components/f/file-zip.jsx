import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/f5po9bcuy.css';
import '../../css/m/mndv0_ajw.css';
import '../../css/p/p9hceabxh.css';
import '../../css/c/cwzlrubce.css';
import '../../css/q/qgrh-6wks.css';
import '../../css/a/aq5hxgt2c.css';
import '../../css/q/q0v70bbbh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="f5po9bcuy"/><path class="mndv0_ajw"/><path class="p9hceabxh"/><rect class="cwzlrubce"/><path class="qgrh-6wks"/><path class="aq5hxgt2c"/><path class="q0v70bbbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-zip"} {...others} />);
}

export default Component;
