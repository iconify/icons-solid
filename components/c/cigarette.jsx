import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vltcx7bao.css';
import '../../css/y/y32z1sv5x.css';
import '../../css/m/m7lcnxy7u.css';
import '../../css/v/vo3sx_b2a.css';
import '../../css/v/vnx0qzb5p.css';
import '../../css/k/kt_wdpb0f.css';
import '../../css/i/iq5w7mh-b.css';
import '../../css/l/lv0njegbx.css';
import '../../css/g/gc49y-d5a.css';
import '../../css/r/roria_v2r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vltcx7bao"/><path class="y32z1sv5x"/><path class="m7lcnxy7u"/><path class="vo3sx_b2a"/><path class="vnx0qzb5p"/><path class="kt_wdpb0f"/><path class="iq5w7mh-b"/><path class="lv0njegbx"/><path class="gc49y-d5a"/><path class="roria_v2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:cigarette"} {...others} />);
}

export default Component;
