import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w0fua1bih.css';
import '../../css/k/kn21p-bsc.css';
import '../../css/x/xsvae97sc.css';
import '../../css/z/z7kb1ubrm.css';
import '../../css/e/egfkty-mb.css';
import '../../css/c/c8vzifbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="w0fua1bih"/><path class="kn21p-bsc"/><path class="wm-shine xsvae97sc"/><path class="wm-k z7kb1ubrm"/><path class="egfkty-mb wm-a"/><path class="c8vzifbmc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-koala"} {...others} />);
}

export default Component;
