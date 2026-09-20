import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/d/dlecmdade.css';
import '../../css/s/s0_05_nra.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vbicd5bap.css';
import '../../css/l/lrrjn_18d.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGXRDnBcnk" width="16" height="20" x="4" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="dlecmdade"/><path class="s0_05_nra"/></mask><g class="h01tyzbfu"><path mask="url(#SVGXRDnBcnk)" class="vbicd5bap"/><path class="lrrjn_18d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:humidity-light"} {...others} />);
}

export default Component;
