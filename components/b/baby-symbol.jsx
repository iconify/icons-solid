import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrks0fbpf.css';
import '../../css/a/a1xc9wtzj.css';
import '../../css/l/lnk70ebvn.css';
import '../../css/k/k_aj-u6vn.css';
import '../../css/w/w181286hn.css';
import '../../css/g/g84hzdkte.css';
import '../../css/j/j2vc_krmp.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/mmd2f6aax.css';
import '../../css/w/w9c0vm-3u.css';
import '../../css/k/kouts3b-v.css';
import '../../css/v/vlrdnybbv.css';
import '../../css/n/n8gu1ebhy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mrks0fbpf"/><path class="a1xc9wtzj"/><path class="lnk70ebvn"/><path class="k_aj-u6vn"/><path class="w181286hn"/><path class="g84hzdkte"/><circle class="j2vc_krmp"/><g class="jn8qy4bru"><path class="mmd2f6aax"/><path class="w9c0vm-3u"/><path class="kouts3b-v"/><circle class="vlrdnybbv"/><path class="n8gu1ebhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:baby-symbol"} {...others} />);
}

export default Component;
