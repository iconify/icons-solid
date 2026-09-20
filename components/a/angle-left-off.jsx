import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/knq4cqwzw.css';
import '../../css/u/ufhld3mmu.css';
import '../../css/v/vbuonu-3b.css';
import '../../css/i/ivigl7ula.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="knq4cqwzw"/><path class="ufhld3mmu"/><path class="vbuonu-3b"/><path class="ivigl7ula"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:angle-left-off"} {...others} />);
}

export default Component;
