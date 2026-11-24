import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q2_ijq2bv.css';
import '../../css/t/tn_ebwbvg.css';
import '../../css/o/os03_hbki.css';
import '../../css/h/hawnnzqnt.css';
import '../../css/k/k6rmqzb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q2_ijq2bv"/><path class="tn_ebwbvg"/><path class="os03_hbki"/><path class="hawnnzqnt"/><path class="k6rmqzb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:chocolate-bar-duotone"} {...others} />);
}

export default Component;
