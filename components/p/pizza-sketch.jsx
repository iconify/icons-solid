import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t_zmzab8k.css';
import '../../css/b/b6_46kbps.css';
import '../../css/f/fx7n841gh.css';
import '../../css/x/x2ymrx5ul.css';
import '../../css/o/ow20b-m-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t_zmzab8k"/><path class="b6_46kbps wm-k"/><path class="fx7n841gh wm-a"/><path class="wm-k x2ymrx5ul"/><path class="ow20b-m-k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pizza-sketch"} {...others} />);
}

export default Component;
