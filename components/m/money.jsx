import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x53_s647x.css';
import '../../css/w/w1rto3t9s.css';
import '../../css/v/vhln7g00p.css';
import '../../css/m/mur8xvbmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x53_s647x"/><rect transform="matrix(0 -1 -1 0 22.24 19)" class="w1rto3t9s"/><path class="vhln7g00p"/><circle class="mur8xvbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:money"} {...others} />);
}

export default Component;
