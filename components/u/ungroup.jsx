import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sjdyxdiqh.css';
import '../../css/k/kbvlbtbwo.css';
import '../../css/a/a9z8cqiqo.css';
import '../../css/q/q7i1smbhf.css';
import '../../css/j/j_8_66ovx.css';
import '../../css/d/dnv4w0lba.css';
import '../../css/h/h07jfgc8r.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="sjdyxdiqh wm-shadow"/><path class="kbvlbtbwo"/><path class="a9z8cqiqo"/><path class="q7i1smbhf"/><path class="j_8_66ovx"/><path class="dnv4w0lba wm-shine"/><path class="h07jfgc8r wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:ungroup"} {...others} />);
}

export default Component;
