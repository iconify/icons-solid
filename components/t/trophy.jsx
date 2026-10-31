import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/se55wyb2s.css';
import '../../css/j/jow1ulb7x.css';
import '../../css/x/xb3gcybso.css';
import '../../css/h/hmpoizbxw.css';
import '../../css/q/q8oq_40rd.css';
import '../../css/q/qzlm36blf.css';
import '../../css/n/nfquwxxpi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="se55wyb2s"/><path class="jow1ulb7x"/><path class="wm-shine xb3gcybso"/><path class="hmpoizbxw"/><path class="q8oq_40rd"/><path class="qzlm36blf"/><path class="nfquwxxpi wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:trophy"} {...others} />);
}

export default Component;
