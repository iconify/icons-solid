import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsbw_depb.css';
import '../../css/y/yhvpfybjd.css';
import '../../css/l/lgf0mcbka.css';
import '../../css/t/tqsuw4b8v.css';
import '../../css/m/m1lhce96s.css';
import '../../css/h/hmj3avsee.css';
import '../../css/k/k8hr1tb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bsbw_depb"/><path class="yhvpfybjd"/><path class="lgf0mcbka"/><path class="tqsuw4b8v"/><path class="m1lhce96s"/><path class="hmj3avsee"/><path class="k8hr1tb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:hierarchy"} {...others} />);
}

export default Component;
