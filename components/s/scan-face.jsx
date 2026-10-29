import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/molcvsbva.css';
import '../../css/w/wl_z7s7lf.css';
import '../../css/x/xrey7damx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="molcvsbva wm-k"/><path class="wl_z7s7lf wm-a"/><path class="wm-a xrey7damx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:scan-face"} {...others} />);
}

export default Component;
