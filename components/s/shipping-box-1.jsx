import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/ut78gleni.css';
import '../../css/w/wojputb6u.css';
import '../../css/z/ztg653twq.css';
import '../../css/w/w440_hb3p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ut78gleni"/><path class="wojputb6u"/><path class="ztg653twq"/><path class="w440_hb3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:shipping-box-1"} {...others} />);
}

export default Component;
