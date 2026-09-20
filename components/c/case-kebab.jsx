import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xnajft-bs.css';
import '../../css/p/p1u_g2bvy.css';
import '../../css/p/pxaww4b9h.css';
import '../../css/w/w6_bkqfhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="xnajft-bs"/><path class="p1u_g2bvy"/><circle class="pxaww4b9h"/><path class="w6_bkqfhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:case-kebab"} {...others} />);
}

export default Component;
