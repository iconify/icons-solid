import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iq0d50b_h.css';
import '../../css/c/cilyb1vht.css';
import '../../css/v/vuijoucpk.css';
import '../../css/w/wz8gm4bgl.css';
import '../../css/j/jb0d19nws.css';
import '../../css/c/c3wgojkty.css';
import '../../css/i/io1ghjw5c.css';
import '../../css/z/zr434cclm.css';
import '../../css/h/hmh7knb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="iq0d50b_h"/><path class="cilyb1vht"/><path class="vuijoucpk wm-shine"/><path class="wm-k wz8gm4bgl"/><path class="jb0d19nws wm-a"/><path class="c3wgojkty wm-s"/><path class="io1ghjw5c"/><path class="zr434cclm"/><path class="hmh7knb6b wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:mail-plus"} {...others} />);
}

export default Component;
