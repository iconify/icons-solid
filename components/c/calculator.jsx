import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/uc3-lxbkx.css';
import '../../css/r/rw1_sibox.css';
import '../../css/v/v4vpnfbvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="uc3-lxbkx"/><path class="rw1_sibox"/><path class="v4vpnfbvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:calculator"} {...others} />);
}

export default Component;
