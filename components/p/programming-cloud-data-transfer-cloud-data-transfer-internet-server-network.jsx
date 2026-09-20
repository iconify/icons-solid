import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/clnx_bcta.css';
import '../../css/g/gqwzpfcre.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="clnx_bcta"/><path class="gqwzpfcre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-cloud-data-transfer-cloud-data-transfer-internet-server-network"} {...others} />);
}

export default Component;
