import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oyjqk5bct.css';
import '../../css/d/dxon-mtqm.css';
import '../../css/o/o6zz0vbkl.css';
import '../../css/m/mzn_blbqr.css';
import '../../css/t/ttk7zkrfj.css';
import '../../css/j/jz2fo-b4g.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="oyjqk5bct"/><path class="dxon-mtqm"/><path class="o6zz0vbkl"/><path class="mzn_blbqr"/><path class="ttk7zkrfj"/><path class="jz2fo-b4g"/><path class="si_mtzbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gift-broken"} {...others} />);
}

export default Component;
