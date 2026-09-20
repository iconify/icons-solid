import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2ua6wb4v.css';
import '../../css/h/hel2wrbms.css';
import '../../css/k/kevo0xbxb.css';
import '../../css/s/sqe2gfa0u.css';
import '../../css/x/xpd42gb0r.css';

const viewBox = {"width":256,"height":341};
const content = `<path class="w2ua6wb4v"/><path class="hel2wrbms"/><path class="kevo0xbxb"/><path class="sqe2gfa0u"/><path class="xpd42gb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:upstash"} {...others} />);
}

export default Component;
