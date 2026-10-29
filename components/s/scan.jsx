import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xps_907vl.css';
import '../../css/v/vz-wlg24n.css';
import '../../css/r/r9b3uwi_y.css';
import '../../css/l/lk58n-fdk.css';
import '../../css/z/zza6s4ggi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xps_907vl"/><path class="vz-wlg24n wm-k"/><path class="r9b3uwi_y wm-k"/><path class="lk58n-fdk wm-a"/><path class="wm-a zza6s4ggi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:scan"} {...others} />);
}

export default Component;
