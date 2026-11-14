import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tlpmv6b8k.css';
import '../../css/d/df-j23bjo.css';
import '../../css/n/nxsctgbfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tlpmv6b8k"/><path class="df-j23bjo"/><path class="nxsctgbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-setting-02"} {...others} />);
}

export default Component;
