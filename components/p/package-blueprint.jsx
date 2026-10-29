import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s5443tb7r.css';
import '../../css/x/xyui1mbhy.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/w/wb87fvbsu.css';
import '../../css/s/sqx3j0bau.css';
import '../../css/y/y8fe1tpsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="s5443tb7r wm-deco"/><path class="wm-deco xyui1mbhy"/><path class="cf3uzcrzx wm-deco"/><path class="wb87fvbsu wm-k"/><path class="sqx3j0bau wm-a"/><path class="wm-k y8fe1tpsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:package-blueprint"} {...others} />);
}

export default Component;
