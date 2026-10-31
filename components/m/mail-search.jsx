import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x3wbxnbgq.css';
import '../../css/w/ws-p50zta.css';
import '../../css/c/cilyb1vht.css';
import '../../css/v/vuijoucpk.css';
import '../../css/w/wz8gm4bgl.css';
import '../../css/j/jb0d19nws.css';
import '../../css/j/jd9ceobpf.css';
import '../../css/j/jlp-kegqt.css';
import '../../css/y/y8-4zw8yd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="x3wbxnbgq"/><path class="wm-s ws-p50zta"/><path class="cilyb1vht"/><path class="vuijoucpk wm-shine"/><path class="wm-k wz8gm4bgl"/><path class="jb0d19nws wm-a"/><path class="jd9ceobpf wm-s"/><path class="jlp-kegqt"/><path class="y8-4zw8yd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:mail-search"} {...others} />);
}

export default Component;
