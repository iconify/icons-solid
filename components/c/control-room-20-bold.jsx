import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1m8p11fi.css';
import '../../css/o/oa8orvb1f.css';
import '../../css/x/xg0hbcg2p.css';
import '../../css/o/osylfriqx.css';
import '../../css/p/p3fycvbnf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d1m8p11fi"/><path class="oa8orvb1f"/><path class="xg0hbcg2p"/><path class="osylfriqx"/><path class="p3fycvbnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:control-room-20-bold"} {...others} />);
}

export default Component;
