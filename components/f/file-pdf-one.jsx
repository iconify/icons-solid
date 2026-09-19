import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/f5po9bcuy.css';
import '../../css/m/mndv0_ajw.css';
import '../../css/c/cwzlrubce.css';
import '../../css/b/bpjd_mbew.css';
import '../../css/q/q25pvze9b.css';
import '../../css/p/p9hceabxh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="f5po9bcuy"/><path class="mndv0_ajw"/><rect class="cwzlrubce"/><path class="bpjd_mbew"/><path class="q25pvze9b"/><path class="p9hceabxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-pdf-one"} {...others} />);
}

export default Component;
