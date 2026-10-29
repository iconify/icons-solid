import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hrdkuzqjh.css';
import '../../css/b/b7u2wk65u.css';
import '../../css/d/d4oa5vbln.css';
import '../../css/a/ajtfg84kv.css';
import '../../css/w/wz8gm4bgl.css';
import '../../css/w/wqb-0n4qk.css';
import '../../css/c/c3wgojkty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hrdkuzqjh wm-k"/><path class="b7u2wk65u wm-a"/><path class="d4oa5vbln wm-s"/><path class="ajtfg84kv wm-shadow"/><path class="wm-k wz8gm4bgl"/><path class="wm-a wqb-0n4qk"/><path class="c3wgojkty wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mail-plus-engrave"} {...others} />);
}

export default Component;
