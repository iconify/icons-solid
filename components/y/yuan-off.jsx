import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9gst35sp.css';
import '../../css/k/kfm7curke.css';
import '../../css/j/j96uhbcif.css';
import '../../css/n/n3yxckbfl.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r9gst35sp"/><path clip-rule="evenodd" class="kfm7curke"/><path clip-rule="evenodd" class="j96uhbcif"/><path clip-rule="evenodd" class="n3yxckbfl"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:yuan-off"} {...others} />);
}

export default Component;
