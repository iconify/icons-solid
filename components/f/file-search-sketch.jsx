import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c085-k6yx.css';
import '../../css/b/bnocajebg.css';
import '../../css/u/u4cstkbgk.css';
import '../../css/o/oy1u0bcyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c085-k6yx"/><path class="bnocajebg wm-a"/><path class="u4cstkbgk wm-k"/><path class="oy1u0bcyu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-search-sketch"} {...others} />);
}

export default Component;
