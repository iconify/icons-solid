import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xyxsjkypy.css';
import '../../css/i/ingnl-bbd.css';
import '../../css/e/eqf28zbbn.css';
import '../../css/h/hf5njlbjb.css';
import '../../css/k/kesk-u0bd.css';
import '../../css/n/nyryjhbwl.css';
import '../../css/w/wfbl8abud.css';
import '../../css/p/p8_rdgbuq.css';
import '../../css/m/m_i44bc5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow xyxsjkypy"/><path class="ingnl-bbd wm-shadow"/><path class="eqf28zbbn"/><path class="hf5njlbjb"/><path class="kesk-u0bd"/><path class="nyryjhbwl"/><path class="wfbl8abud wm-shine"/><path class="p8_rdgbuq wm-shine"/><path class="m_i44bc5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:git-commit"} {...others} />);
}

export default Component;
