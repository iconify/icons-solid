import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/a/azteu2enm.css';
import '../../css/q/q_x7p_jpv.css';
import '../../css/z/zfdh_1bxb.css';
import '../../css/t/tm8n1o7zi.css';
import '../../css/k/k3mobpbyn.css';
import '../../css/c/c5pfng0-m.css';
import '../../css/j/jc7vab1wn.css';
import '../../css/m/myiy3qbel.css';
import '../../css/l/l5ra23b3i.css';
import '../../css/o/opj_i-rgj.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<g class="wj4kgr0on"><path class="azteu2enm"/><path class="q_x7p_jpv"/></g><g class="zfdh_1bxb"><path class="tm8n1o7zi"/><path class="k3mobpbyn"/><path class="c5pfng0-m"/><path class="jc7vab1wn"/><path class="myiy3qbel"/><path class="l5ra23b3i"/><path class="opj_i-rgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:statefulset"} {...others} />);
}

export default Component;
