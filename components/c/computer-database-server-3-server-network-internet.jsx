import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tnn5xbr6f.css';
import '../../css/o/odo1--zku.css';
import '../../css/q/qco3bij0z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="tnn5xbr6f"/><circle class="odo1--zku"/><path class="qco3bij0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-database-server-3-server-network-internet"} {...others} />);
}

export default Component;
