import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/w/wju4_vbqr.css';
import '../../css/z/zqfa48bws.css';
import '../../css/h/hnhnaeb6a.css';
import '../../css/d/d7fai-gek.css';
import '../../css/q/q1uvks1-h.css';
import '../../css/p/pt9ehcbgu.css';
import '../../css/l/l6qx2-aya.css';
import '../../css/n/nz71yhbwb.css';
import '../../css/l/l-16jgbac.css';
import '../../css/f/fzj8o6vee.css';
import '../../css/h/he46m0r3j.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="wju4_vbqr"/><path class="zqfa48bws"/><path clip-rule="evenodd" class="hnhnaeb6a"/><path class="d7fai-gek"/><path clip-rule="evenodd" class="q1uvks1-h"/><path class="pt9ehcbgu"/><path clip-rule="evenodd" class="l6qx2-aya"/></g><path clip-rule="evenodd" class="nz71yhbwb"/><path clip-rule="evenodd" class="l-16jgbac"/><path clip-rule="evenodd" class="fzj8o6vee"/><path clip-rule="evenodd" class="he46m0r3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:sliders-print"} {...others} />);
}

export default Component;
