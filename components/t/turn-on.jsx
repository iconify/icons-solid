import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/guuex1n9c.css';
import '../../css/j/jbe-vzczt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y9tr6bcfx"><path class="guuex1n9c"/><path class="jbe-vzczt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:turn-on"} {...others} />);
}

export default Component;
