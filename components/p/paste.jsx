import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qk796gbsi.css';
import '../../css/k/k-_lk-5of.css';
import '../../css/f/fna_fvbbx.css';
import '../../css/m/mbman72ca.css';
import '../../css/y/ys7o-8b0n.css';
import '../../css/e/etjci_b1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qk796gbsi wm-shadow"/><path class="k-_lk-5of"/><path class="fna_fvbbx"/><path class="mbman72ca"/><path class="ys7o-8b0n"/><path class="etjci_b1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:paste"} {...others} />);
}

export default Component;
