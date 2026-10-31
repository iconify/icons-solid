import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g75prrb1j.css';
import '../../css/a/a08onbc2i.css';
import '../../css/g/goe5_v87p.css';
import '../../css/g/g_jiwbcgj.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="g75prrb1j"/><path class="a08onbc2i"/><path class="goe5_v87p"/><path class="g_jiwbcgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gw"} {...others} />);
}

export default Component;
