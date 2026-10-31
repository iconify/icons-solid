import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kc1cgebkw.css';
import '../../css/f/f1r7skb6p.css';
import '../../css/j/j13328u8t.css';
import '../../css/l/lhjzh21tf.css';
import '../../css/j/jlrg3u6fw.css';
import '../../css/j/jxo5yab7v.css';
import '../../css/j/j_nc1wv6u.css';
import '../../css/k/kfb8zpnsw.css';
import '../../css/c/cas92vbkb.css';
import '../../css/x/xtu2p1bjl.css';
import '../../css/j/j_ztq6bvo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kc1cgebkw"/><path class="f1r7skb6p"/><path class="j13328u8t"/><path class="lhjzh21tf"/><path class="jlrg3u6fw"/><path class="jxo5yab7v"/><path class="j_nc1wv6u"/><path clip-rule="evenodd" class="kfb8zpnsw"/><path class="cas92vbkb"/><path class="xtu2p1bjl"/><path clip-rule="evenodd" class="j_ztq6bvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:man-15-pop"} {...others} />);
}

export default Component;
