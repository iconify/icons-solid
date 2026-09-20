import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gl7x28b9l.css';
import '../../css/i/itbq-vz1i.css';
import '../../css/s/sczblzs9p.css';
import '../../css/e/e2jap3rke.css';
import '../../css/t/tgh9kpbtn.css';
import '../../css/p/p32pdez_m.css';
import '../../css/s/sudiajdap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gl7x28b9l"/><path class="itbq-vz1i"/><path class="sczblzs9p"/><path class="e2jap3rke"/><path class="tgh9kpbtn"/><rect class="p32pdez_m"/><rect class="sudiajdap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:barcode-line-duotone"} {...others} />);
}

export default Component;
