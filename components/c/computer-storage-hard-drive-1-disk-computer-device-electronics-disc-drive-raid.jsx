import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ymyhvea6b.css';
import '../../css/o/o32ba5f7u.css';
import '../../css/r/rhq1sb0yc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="ymyhvea6b"/><path class="o32ba5f7u"/><circle class="rhq1sb0yc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-storage-hard-drive-1-disk-computer-device-electronics-disc-drive-raid"} {...others} />);
}

export default Component;
