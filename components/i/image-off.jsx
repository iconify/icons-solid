import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc6io7jgc.css';
import '../../css/q/q6ly_lxbl.css';
import '../../css/t/tr8xe4bes.css';
import '../../css/g/gm1_xetap.css';
import '../../css/e/e1897xpej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hc6io7jgc"/><path class="q6ly_lxbl"/><path class="tr8xe4bes"/><path class="gm1_xetap"/><path class="e1897xpej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-off"} {...others} />);
}

export default Component;
