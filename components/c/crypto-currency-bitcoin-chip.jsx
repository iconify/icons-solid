import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4c0w6bsc.css';
import '../../css/d/d64lkxbht.css';
import '../../css/x/xe5lolo2k.css';
import '../../css/x/xqlreob9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n4c0w6bsc"/><path class="d64lkxbht"/><path class="xe5lolo2k"/><path class="xqlreob9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:crypto-currency-bitcoin-chip"} {...others} />);
}

export default Component;
