import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/f5po9bcuy.css';
import '../../css/m/mndv0_ajw.css';
import '../../css/p/p9hceabxh.css';
import '../../css/c/cwzlrubce.css';
import '../../css/h/hyz72bcbi.css';
import '../../css/h/hlf05zbnn.css';
import '../../css/v/vckgq5skn.css';
import '../../css/f/f44c72b-k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="f5po9bcuy"/><path class="mndv0_ajw"/><path class="p9hceabxh"/><rect class="cwzlrubce"/><path class="hyz72bcbi"/><path class="hlf05zbnn"/><ellipse class="vckgq5skn"/><path class="f44c72b-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-doc"} {...others} />);
}

export default Component;
