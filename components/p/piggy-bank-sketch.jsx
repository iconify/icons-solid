import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nkv6ox-um.css';
import '../../css/a/aewt85m1n.css';
import '../../css/t/tw2yi0b2x.css';
import '../../css/g/gsmwzvboi.css';
import '../../css/n/n2b3okm6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nkv6ox-um"/><path class="aewt85m1n wm-k"/><path class="tw2yi0b2x wm-k"/><path class="gsmwzvboi wm-a"/><path class="n2b3okm6x wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:piggy-bank-sketch"} {...others} />);
}

export default Component;
