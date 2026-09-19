import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inx-9dmcc.css';
import '../../css/m/m65hm3jnm.css';
import '../../css/e/e-92qdb-a.css';
import '../../css/g/g_jiwbcgj.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="inx-9dmcc"/><path class="m65hm3jnm"/><path class="e-92qdb-a"/><path class="g_jiwbcgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gw"} {...others} />);
}

export default Component;
