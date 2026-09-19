import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lghko0ben.css';
import '../../css/n/nmq78wfgd.css';
import '../../css/c/cr3n5fsna.css';
import '../../css/y/yhbm68bsm.css';
import '../../css/c/ckjlwkbaq.css';
import '../../css/f/fz768sb9r.css';
import '../../css/z/z4-qavbjo.css';
import '../../css/z/z14a0lbuj.css';
import '../../css/n/njc25huqk.css';
import '../../css/j/j6dcjv_lq.css';
import '../../css/h/hbess84gp.css';
import '../../css/z/zfyk-vbxm.css';
import '../../css/n/noyichfil.css';
import '../../css/j/joeqmns_w.css';
import '../../css/v/vj-ch7sih.css';
import '../../css/a/ai-ofpb2q.css';
import '../../css/y/y9_7gq1zp.css';
import '../../css/g/g1j7fnvyg.css';
import '../../css/v/v8r7rg7yk.css';
import '../../css/b/bbu6-cc3a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lghko0ben"/><path class="nmq78wfgd"/><path class="cr3n5fsna"/><path class="yhbm68bsm"/><path class="ckjlwkbaq"/><path class="fz768sb9r"/><path class="z4-qavbjo"/><path class="z14a0lbuj"/><path class="njc25huqk"/><path class="j6dcjv_lq"/><path class="hbess84gp"/><path class="zfyk-vbxm"/><path class="noyichfil"/><path class="joeqmns_w"/><path class="vj-ch7sih"/><path class="ai-ofpb2q"/><path class="y9_7gq1zp"/><path class="g1j7fnvyg"/><path class="v8r7rg7yk"/><path class="bbu6-cc3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:singer-medium"} {...others} />);
}

export default Component;
