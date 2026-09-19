import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s98hn0ejv.css';
import '../../css/t/tlit071fe.css';
import '../../css/i/ishbz4cce.css';
import '../../css/s/sololpbna.css';
import '../../css/r/rt617yb-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s98hn0ejv"/><path clip-rule="evenodd" class="tlit071fe"/><circle class="ishbz4cce"/><circle class="sololpbna"/><circle class="rt617yb-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:node-3-connections-filled"} {...others} />);
}

export default Component;
