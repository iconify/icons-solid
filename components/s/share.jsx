import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jqzptdbsj.css';
import '../../css/i/i8s8nxb0p.css';
import '../../css/u/uv2ye9bti.css';
import '../../css/w/w83j6pb4m.css';
import '../../css/u/ucs62gbfv.css';
import '../../css/k/k2ahxt-2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jqzptdbsj wm-shadow"/><path class="i8s8nxb0p"/><path class="uv2ye9bti"/><path class="w83j6pb4m"/><path class="ucs62gbfv"/><path class="k2ahxt-2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:share"} {...others} />);
}

export default Component;
