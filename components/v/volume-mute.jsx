import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pe0c3seab.css';
import '../../css/g/gha873bko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pe0c3seab"/><path class="gha873bko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:volume-mute"} {...others} />);
}

export default Component;
