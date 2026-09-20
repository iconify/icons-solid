import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/inelaxb2s.css';
import '../../css/q/qtxsezbbm.css';
import '../../css/v/ve_txpbjb.css';
import '../../css/s/swsab_86e.css';
import '../../css/c/cxwprnb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="inelaxb2s"/><circle class="qtxsezbbm"/><path class="ve_txpbjb"/><circle class="swsab_86e"/><path class="cxwprnb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:scissors-hair-comb"} {...others} />);
}

export default Component;
