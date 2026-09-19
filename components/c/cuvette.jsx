import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/ov1inobuy.css';
import '../../css/y/yv1699czh.css';
import '../../css/b/bi_8mq_6r.css';
import '../../css/p/pxwcw8_4n.css';
import '../../css/k/k5rh42l8r.css';
import '../../css/w/wv_-wnjxm.css';
import '../../css/j/juslgubkc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path clip-rule="evenodd" class="ov1inobuy"/><path class="yv1699czh"/><path class="yv1699czh"/><path class="bi_8mq_6r"/><path class="bi_8mq_6r"/><path class="pxwcw8_4n"/><path class="k5rh42l8r"/><path class="wv_-wnjxm"/><path class="juslgubkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cuvette"} {...others} />);
}

export default Component;
