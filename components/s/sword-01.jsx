import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k3g88ac1q.css';
import '../../css/n/nf31t0akt.css';
import '../../css/v/vco_ahbxh.css';
import '../../css/i/i9gyr2bxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="k3g88ac1q"/><path class="nf31t0akt"/><path class="vco_ahbxh"/><path class="i9gyr2bxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sword-01"} {...others} />);
}

export default Component;
