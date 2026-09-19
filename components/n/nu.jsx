import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmy_qib1n.css';
import '../../css/p/p3e-iolxe.css';
import '../../css/v/vz2l21qwe.css';
import '../../css/w/wx45v585x.css';
import '../../css/f/futqb-bab.css';
import '../../css/k/kgsrrkzgc.css';
import '../../css/x/xehxunqhw.css';

const viewBox = {"width":301,"height":151};
const content = `<g transform="translate(1 1)" class="ft5dv1b6b"><path class="tmy_qib1n"/><path class="p3e-iolxe"/><path class="vz2l21qwe"/><path class="wx45v585x"/><path class="futqb-bab"/><circle class="kgsrrkzgc"/><path class="xehxunqhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:nu"} {...others} />);
}

export default Component;
