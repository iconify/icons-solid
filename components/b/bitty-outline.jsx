import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xglklabzt.css';
import '../../css/o/or_e2fe0o.css';
import '../../css/b/bjbn9291n.css';
import '../../css/e/e-vhv53hm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="xglklabzt"/><circle class="or_e2fe0o"/><circle class="bjbn9291n"/><path class="e-vhv53hm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:bitty-outline"} {...others} />);
}

export default Component;
