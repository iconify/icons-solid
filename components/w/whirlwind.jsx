import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mvkz-zbzz.css';
import '../../css/t/t4o_z7khl.css';
import '../../css/r/ryuc04bif.css';
import '../../css/p/p2yu4yz6p.css';
import '../../css/q/q1juiplek.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGW35MPe2S"><g class="aql7dnt-u"><path class="mvkz-zbzz"/><path class="t4o_z7khl"/><path class="ryuc04bif"/><path class="p2yu4yz6p"/><path class="q1juiplek"/></g></mask></defs><path mask="url(#SVGW35MPe2S)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:whirlwind"} {...others} />);
}

export default Component;
