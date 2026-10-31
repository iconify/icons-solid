import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sr19dnb3g.css';
import '../../css/k/ks9oxzb9g.css';
import '../../css/z/z-7sxxbzj.css';
import '../../css/i/ilgsjybrj.css';
import '../../css/c/c4hcpwbbw.css';
import '../../css/i/iq2_exqum.css';
import '../../css/t/tdj7zxxyg.css';
import '../../css/d/d6tyl-c5k.css';
import '../../css/l/lnv8sbbob.css';
import '../../css/t/tphzwl2pc.css';
import '../../css/p/pnvs2cdfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sr19dnb3g wm-shadow"/><path class="ks9oxzb9g wm-k"/><path class="wm-k z-7sxxbzj"/><path class="ilgsjybrj wm-k"/><path class="c4hcpwbbw wm-k"/><path class="iq2_exqum wm-shine"/><path class="tdj7zxxyg wm-a"/><path class="d6tyl-c5k wm-a"/><path class="lnv8sbbob wm-a"/><path class="tphzwl2pc wm-a"/><path class="pnvs2cdfo wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:minimize"} {...others} />);
}

export default Component;
