import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/c/cq971jbmr.css';
import '../../css/w/w6nbzdegc.css';
import '../../css/y/ygi3hj8ab.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="yph-txb3i"/><circle class="cq971jbmr"/><circle class="w6nbzdegc"/><circle class="ygi3hj8ab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-menu-horizontal-square-navigation-dots-three-square-button-horizontal-menu"} {...others} />);
}

export default Component;
