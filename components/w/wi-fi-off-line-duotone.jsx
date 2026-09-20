import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rsrhfac5n.css';
import '../../css/x/xy8vo0b-r.css';
import '../../css/x/xr6hxtsid.css';
import '../../css/a/axlwdg30m.css';
import '../../css/z/zocpetdxz.css';
import '../../css/x/x4x8t_s-n.css';
import '../../css/y/yzgz32bhq.css';
import '../../css/z/zkyjh5bzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rsrhfac5n"/><path class="xy8vo0b-r"/><path class="xr6hxtsid"/><path class="axlwdg30m"/><path class="zocpetdxz"/><path class="x4x8t_s-n"/><path class="yzgz32bhq"/><path class="zkyjh5bzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-off-line-duotone"} {...others} />);
}

export default Component;
