import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ux0u4xb3t.css';
import '../../css/s/sy45z6j-n.css';
import '../../css/k/kqqt3jirm.css';
import '../../css/m/mi4cddc2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ux0u4xb3t"/><rect transform="matrix(-1 0 0 1 20 1.72)" class="sy45z6j-n"/><rect transform="matrix(-1 0 0 1 16.67 5.78)" class="kqqt3jirm"/><path class="mi4cddc2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:article"} {...others} />);
}

export default Component;
