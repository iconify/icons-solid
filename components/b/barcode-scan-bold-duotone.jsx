import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0a45tbbt.css';
import '../../css/x/xgu-htb9s.css';
import '../../css/g/gytfce5tm.css';
import '../../css/r/rdnvirs_r.css';
import '../../css/k/kjvydr1yr.css';
import '../../css/d/dfiu8ttcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x0a45tbbt"/><path class="xgu-htb9s"/><path class="gytfce5tm"/><path class="rdnvirs_r"/><path class="kjvydr1yr"/><path class="dfiu8ttcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:barcode-scan-bold-duotone"} {...others} />);
}

export default Component;
