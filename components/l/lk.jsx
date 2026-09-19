import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-1vj1voz.css';
import '../../css/s/sdgnrbb3f.css';
import '../../css/x/xnx_zun1j.css';
import '../../css/v/vmeptgtdi.css';
import '../../css/t/ty7j3abrd.css';
import '../../css/m/m4ay3wsta.css';
import '../../css/f/fv_3uybpi.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="k-1vj1voz"/><path class="sdgnrbb3f"/><path class="xnx_zun1j"/><path class="vmeptgtdi"/><path class="ty7j3abrd"/><path class="m4ay3wsta"/><path class="fv_3uybpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:lk"} {...others} />);
}

export default Component;
