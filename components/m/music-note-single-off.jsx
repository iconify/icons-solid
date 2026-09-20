import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jwclepbql.css';
import '../../css/y/yh1nqihsf.css';
import '../../css/m/mxs3jyekp.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jwclepbql"/><path class="yh1nqihsf"/><path clip-rule="evenodd" class="mxs3jyekp"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:music-note-single-off"} {...others} />);
}

export default Component;
