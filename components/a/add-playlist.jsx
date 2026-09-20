import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/m8k3h8pds.css';
import '../../css/z/zp6wnrbdq.css';
import '../../css/k/kjcpkzwgw.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="m8k3h8pds"/><path class="zp6wnrbdq"/><path class="kjcpkzwgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:add-playlist"} {...others} />);
}

export default Component;
