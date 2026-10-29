import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zq8hvpbkq.css';
import '../../css/c/cwu1pjnsx.css';
import '../../css/i/ip4n81bia.css';
import '../../css/a/azlgkxb_e.css';
import '../../css/l/l_nfeebxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zq8hvpbkq"/><path class="cwu1pjnsx wm-k"/><path class="ip4n81bia wm-s"/><path class="azlgkxb_e wm-k"/><path class="l_nfeebxw wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-check-sketch"} {...others} />);
}

export default Component;
