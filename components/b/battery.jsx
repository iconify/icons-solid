import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/uf0o_xbbb.css';
import '../../css/h/huci4xpnw.css';
import '../../css/u/uhxc-vbch.css';
import '../../css/m/mmaumbclu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="uf0o_xbbb"/><path class="huci4xpnw"/><path class="uhxc-vbch"/><path class="mmaumbclu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:battery"} {...others} />);
}

export default Component;
