import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twkgc5b0r.css';
import '../../css/t/t9_dv_b3n.css';
import '../../css/q/qjpiqoipd.css';
import '../../css/v/vxv2ev7vp.css';
import '../../css/l/llpb4oixu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="twkgc5b0r"/><path class="t9_dv_b3n"/><path class="qjpiqoipd"/><path class="vxv2ev7vp"/><path class="llpb4oixu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tram-48-bold"} {...others} />);
}

export default Component;
