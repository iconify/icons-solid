import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/satvpsbii.css';
import '../../css/x/xrsx85byf.css';
import '../../css/u/u8xymlbcl.css';
import '../../css/s/so545kymi.css';
import '../../css/v/vvba51bwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="satvpsbii wm-k"/><path class="wm-k xrsx85byf"/><path class="u8xymlbcl wm-k"/><path class="so545kymi wm-k"/><path class="vvba51bwd wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-bob-sketch"} {...others} />);
}

export default Component;
