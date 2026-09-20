import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vjo6m_bwu.css';
import '../../css/i/ihtd0j-_z.css';
import '../../css/x/xeugi8bqs.css';
import '../../css/d/d_mpy6b4b.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vjo6m_bwu"/><path clip-rule="evenodd" class="ihtd0j-_z"/><path clip-rule="evenodd" class="xeugi8bqs"/><path clip-rule="evenodd" class="d_mpy6b4b"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:enter-off"} {...others} />);
}

export default Component;
