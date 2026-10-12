import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i29j_x8py.css';
import '../../css/z/zf0u2_bci.css';
import '../../css/j/jjbxq_b8w.css';
import '../../css/x/xxbbvx_gg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i29j_x8py"/><path class="zf0u2_bci"/><path class="jjbxq_b8w"/><path class="xxbbvx_gg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:skull-duotone"} {...others} />);
}

export default Component;
