import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xglklabzt.css';
import '../../css/d/dg-z_9bth.css';
import '../../css/v/vw_4rdbwn.css';
import '../../css/q/q2on0eeef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="xglklabzt"/><path class="dg-z_9bth"/><path class="vw_4rdbwn"/><path class="q2on0eeef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:no-dollars-outline"} {...others} />);
}

export default Component;
