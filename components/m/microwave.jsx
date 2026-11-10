import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k--smkn8k.css';
import '../../css/x/xgsu4cbdv.css';
import '../../css/m/m0p3numcs.css';
import '../../css/h/hpn6hg1wi.css';
import '../../css/p/pkn-uccgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k--smkn8k"/><path class="xgsu4cbdv"/><path class="m0p3numcs"/><path class="hpn6hg1wi"/><path class="pkn-uccgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:microwave"} {...others} />);
}

export default Component;
