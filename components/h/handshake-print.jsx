import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/q/qesmk0r7q.css';
import '../../css/f/f14-q6bjd.css';
import '../../css/h/h6sgq2n3s.css';
import '../../css/w/wsi4xgm7q.css';
import '../../css/v/vq_n6cbpd.css';
import '../../css/g/ger730bkj.css';
import '../../css/p/p8j_jkpwo.css';
import '../../css/c/cuw5s_bfl.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="qesmk0r7q"/><path clip-rule="evenodd" class="f14-q6bjd"/><path clip-rule="evenodd" class="h6sgq2n3s"/><path class="wsi4xgm7q"/></g><path clip-rule="evenodd" class="vq_n6cbpd"/><path clip-rule="evenodd" class="ger730bkj"/><path class="p8j_jkpwo"/><path clip-rule="evenodd" class="cuw5s_bfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:handshake-print"} {...others} />);
}

export default Component;
