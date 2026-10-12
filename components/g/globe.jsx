import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ny8eibbpn.css';
import '../../css/h/h4qhcub-h.css';
import '../../css/t/t6pjxesdj.css';
import '../../css/w/w3q_ifu_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="ny8eibbpn"/><circle transform="rotate(90 12 12)" class="h4qhcub-h"/><ellipse transform="rotate(90 12 12)" class="t6pjxesdj"/><path class="w3q_ifu_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe"} {...others} />);
}

export default Component;
