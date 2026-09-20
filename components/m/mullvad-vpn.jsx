import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvg3b1btw.css';
import '../../css/i/i_az_4ptl.css';
import '../../css/t/trnnkhiml.css';
import '../../css/m/mm7815c_i.css';
import '../../css/g/g_vunh8kq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nvg3b1btw"/><path class="i_az_4ptl"/><path class="trnnkhiml"/><path class="mm7815c_i"/><path class="g_vunh8kq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mullvad-vpn"} {...others} />);
}

export default Component;
