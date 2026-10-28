import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dbaen_ipu.css';
import '../../css/u/uc4-dccgp.css';
import '../../css/v/vgc75mb4e.css';
import '../../css/c/cym3j2a8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dbaen_ipu"/><path class="uc4-dccgp"/><path class="vgc75mb4e"/><path class="cym3j2a8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-ils-circle"} {...others} />);
}

export default Component;
