import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oz9hfkbew.css';
import '../../css/q/qga6kg3zc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="oz9hfkbew"/><rect class="qga6kg3zc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-menu-1-alternate-button-parallel-horizontal-lines-menu-navigation-two-thick"} {...others} />);
}

export default Component;
