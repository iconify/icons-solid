import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0jksjblz.css';
import '../../css/q/q2qomos1j.css';
import '../../css/x/xr3fg5b6q.css';
import '../../css/z/zybrflbew.css';
import '../../css/v/vrd63kbyg.css';
import '../../css/m/mei1aq3hy.css';
import '../../css/z/zqj6sc_5l.css';
import '../../css/d/dhjpopbow.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyhAsFsLv"><g class="ft5dv1b6b"><circle class="t0jksjblz"/><path class="q2qomos1j"/><path class="xr3fg5b6q"/><circle class="zybrflbew"/><circle class="vrd63kbyg"/><circle class="mei1aq3hy"/><circle class="zqj6sc_5l"/><circle class="dhjpopbow"/></g></mask></defs><path mask="url(#SVGyhAsFsLv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hdmi-connector"} {...others} />);
}

export default Component;
