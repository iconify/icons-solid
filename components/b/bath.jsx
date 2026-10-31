import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jcl7-bcwo.css';
import '../../css/u/udtmivb2e.css';
import '../../css/c/cp0fdhbst.css';
import '../../css/u/ukw3xqbut.css';
import '../../css/q/qj10p8mvv.css';
import '../../css/z/zev_skb2i.css';
import '../../css/l/l9k_ambwq.css';
import '../../css/a/asacwkijt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jcl7-bcwo"/><path class="udtmivb2e"/><path class="cp0fdhbst wm-shine"/><path class="ukw3xqbut wm-k"/><path class="qj10p8mvv wm-a"/><path class="zev_skb2i"/><path class="l9k_ambwq"/><path class="asacwkijt wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bath"} {...others} />);
}

export default Component;
