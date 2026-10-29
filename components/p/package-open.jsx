import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/ipc8hgbqh.css';
import '../../css/p/pe9nnvb5b.css';
import '../../css/v/v0z4t4bqo.css';
import '../../css/z/zvkpjdbrb.css';
import '../../css/y/y3fzlupkr.css';
import '../../css/u/uvlxbpwvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ipc8hgbqh wm-shadow"/><path class="pe9nnvb5b"/><path class="v0z4t4bqo"/><path class="zvkpjdbrb"/><path class="wm-shine y3fzlupkr"/><path class="uvlxbpwvl wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:package-open"} {...others} />);
}

export default Component;
