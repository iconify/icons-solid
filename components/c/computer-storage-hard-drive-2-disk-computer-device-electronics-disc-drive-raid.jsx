import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mpii_xbbc.css';
import '../../css/m/mxtdwi--q.css';
import '../../css/r/rhq1sb0yc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="mpii_xbbc"/><path class="mxtdwi--q"/><circle class="rhq1sb0yc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-storage-hard-drive-2-disk-computer-device-electronics-disc-drive-raid"} {...others} />);
}

export default Component;
