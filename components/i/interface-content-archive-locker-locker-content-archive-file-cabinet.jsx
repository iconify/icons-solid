import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/knrhvtpcp.css';
import '../../css/l/lx7o3bc4d.css';
import '../../css/i/i5sj4ifpi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="knrhvtpcp"/><circle class="lx7o3bc4d"/><circle class="i5sj4ifpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-content-archive-locker-locker-content-archive-file-cabinet"} {...others} />);
}

export default Component;
