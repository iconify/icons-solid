import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gw3dw1bey.css';
import '../../css/w/w3onc6bpn.css';
import '../../css/a/aj77bgbhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="gw3dw1bey"/><path class="w3onc6bpn"/><path class="aj77bgbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:menu"} {...others} />);
}

export default Component;
