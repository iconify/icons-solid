import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z4w5lob6d.css';
import '../../css/g/gneiz5g1r.css';
import '../../css/i/idkcu5_5f.css';
import '../../css/e/edd_8bc6q.css';
import '../../css/h/h068npaan.css';
import '../../css/d/d9kj48boo.css';
import '../../css/i/ip0k8xrgf.css';
import '../../css/e/ezhx_r9yu.css';
import '../../css/j/j17hywdzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z4w5lob6d"/><path class="gneiz5g1r"/><path class="idkcu5_5f"/><path class="edd_8bc6q"/><path class="h068npaan"/><path class="d9kj48boo"/><path class="ip0k8xrgf"/><path class="ezhx_r9yu"/><path class="j17hywdzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:podcast-line-duotone"} {...others} />);
}

export default Component;
