import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgmikpbhl.css';
import '../../css/q/qui0xubvo.css';
import '../../css/l/l-n86hwmb.css';
import '../../css/v/vgpr6_skd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kgmikpbhl"/><path class="qui0xubvo"/><path class="l-n86hwmb"/><path class="vgpr6_skd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-medal"} {...others} />);
}

export default Component;
