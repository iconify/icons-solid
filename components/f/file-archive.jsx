import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jca4lnd7d.css';
import '../../css/m/mwsfceayy.css';
import '../../css/r/rrd3mlsbn.css';
import '../../css/f/fyugdplzg.css';
import '../../css/l/li-anccmn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jca4lnd7d wm-k"/><path class="mwsfceayy wm-k"/><path class="rrd3mlsbn wm-a"/><path class="fyugdplzg wm-a"/><path class="li-anccmn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file-archive"} {...others} />);
}

export default Component;
