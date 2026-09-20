import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h1j1qf-3w.css';
import '../../css/v/vs49djbdr.css';
import '../../css/k/k8gt8ib7o.css';
import '../../css/e/emcs_sbus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h1j1qf-3w"/><path class="vs49djbdr"/><path class="k8gt8ib7o"/><path class="emcs_sbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-square-minimalistic-charge-broken"} {...others} />);
}

export default Component;
