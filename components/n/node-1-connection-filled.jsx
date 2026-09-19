import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s98hn0ejv.css';
import '../../css/j/jm9p9sjox.css';
import '../../css/s/sololpbna.css';
import '../../css/w/wphbtcjgs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s98hn0ejv"/><path clip-rule="evenodd" class="jm9p9sjox"/><circle class="sololpbna"/><path clip-rule="evenodd" class="wphbtcjgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:node-1-connection-filled"} {...others} />);
}

export default Component;
