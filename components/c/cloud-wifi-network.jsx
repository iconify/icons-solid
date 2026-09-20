import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpy-hum3v.css';
import '../../css/s/sell2fb5v.css';
import '../../css/l/le0o7ro8s.css';
import '../../css/c/ci8hv-bpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qpy-hum3v"/><path class="sell2fb5v"/><path class="le0o7ro8s"/><path class="ci8hv-bpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cloud-wifi-network"} {...others} />);
}

export default Component;
