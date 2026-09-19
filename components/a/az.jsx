import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2r1u945l.css';
import '../../css/u/ui8hhj57u.css';
import '../../css/v/vj1p6ltxl.css';
import '../../css/r/r74_ckbxv.css';
import '../../css/n/nudbr1b6r.css';
import '../../css/x/xp9uod8da.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="v2r1u945l"/><path class="ui8hhj57u"/><path class="vj1p6ltxl"/><circle class="r74_ckbxv"/><circle class="nudbr1b6r"/><path class="xp9uod8da"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:az"} {...others} />);
}

export default Component;
