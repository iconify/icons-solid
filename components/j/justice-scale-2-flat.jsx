import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3l0n1bpn.css';
import '../../css/v/vcdulzb_o.css';
import '../../css/y/yncnvab-y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p3l0n1bpn"/><path class="vcdulzb_o"/><path clip-rule="evenodd" class="yncnvab-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:justice-scale-2-flat"} {...others} />);
}

export default Component;
