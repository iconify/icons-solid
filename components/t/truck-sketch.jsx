import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d_0d8640z.css';
import '../../css/d/dqurycclf.css';
import '../../css/k/kugdbwbuf.css';
import '../../css/u/u77ck3khr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="d_0d8640z"/><path class="dqurycclf wm-k"/><path class="kugdbwbuf wm-k"/><path class="u77ck3khr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:truck-sketch"} {...others} />);
}

export default Component;
