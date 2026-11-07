import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vesdrnt2r.css';
import '../../css/g/gneiz5g1r.css';
import '../../css/i/idkcu5_5f.css';
import '../../css/e/edd_8bc6q.css';
import '../../css/h/h068npaan.css';
import '../../css/s/s2q92fbgb.css';
import '../../css/n/nb3kikr6t.css';
import '../../css/k/kdi5mwb3a.css';
import '../../css/j/j17hywdzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vesdrnt2r"/><path class="gneiz5g1r"/><path class="idkcu5_5f"/><path class="edd_8bc6q"/><path class="h068npaan"/><path class="s2q92fbgb"/><path class="nb3kikr6t"/><path class="kdi5mwb3a"/><path class="j17hywdzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:podcast-line-duotone"} {...others} />);
}

export default Component;
