import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/ns69t1bfh.css';
import '../../css/h/hmi9ckv8k.css';
import '../../css/y/y-qu3hb0f.css';
import '../../css/b/b181i4b5r.css';
import '../../css/z/zj9jgtoxj.css';
import '../../css/q/q6fzztb8w.css';
import '../../css/h/h07jfgc8r.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ns69t1bfh wm-shadow"/><path class="hmi9ckv8k"/><path class="y-qu3hb0f"/><path class="b181i4b5r"/><path class="zj9jgtoxj"/><path class="q6fzztb8w wm-shine"/><path class="h07jfgc8r wm-deco"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:mithai-box"} {...others} />);
}

export default Component;
