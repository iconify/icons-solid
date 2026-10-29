import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/j1i0rstzv.css';
import '../../css/p/pbofit35f.css';
import '../../css/l/lrdp3qanx.css';
import '../../css/b/bs0mr-b1c.css';
import '../../css/p/p978mub4k.css';
import '../../css/g/ge6pl5b7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="j1i0rstzv wm-shadow"/><path class="pbofit35f"/><path class="lrdp3qanx"/><path class="bs0mr-b1c"/><path class="p978mub4k wm-shine"/><path class="ge6pl5b7t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:check"} {...others} />);
}

export default Component;
