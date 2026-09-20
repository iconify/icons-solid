import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u-wlnbb3d.css';
import '../../css/x/xnajft-bs.css';
import '../../css/o/oq6lswlfo.css';
import '../../css/p/pxaww4b9h.css';
import '../../css/w/w6_bkqfhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u-wlnbb3d"/><circle class="xnajft-bs"/><path class="oq6lswlfo"/><circle class="pxaww4b9h"/><path class="w6_bkqfhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:case-snake"} {...others} />);
}

export default Component;
