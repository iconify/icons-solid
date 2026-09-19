import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4gzso3dl.css';
import '../../css/z/z3v-smg0b.css';
import '../../css/b/bc_7zo_yk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b4gzso3dl"/><path class="z3v-smg0b"/><path class="bc_7zo_yk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:eye-closed"} {...others} />);
}

export default Component;
